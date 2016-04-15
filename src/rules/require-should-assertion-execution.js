'use strict';

/**
 * Module dependencies.
 */

const assert = require('assert');

/**
 * Use `should` conditionally.
 */

let assertions;
let chains;
let should;

try {
  should = require('should');

  const Assertion = should.Assertion.prototype;

  assertions = Object.keys(Assertion);
  chains = Object.keys(Assertion).filter(key => typeof Assertion[key] !== 'function');
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') {
    throw error;
  }

  console.log('\u001b[1mRun `npm install should` to enforce the `requireShouldAssertionExecution` rule.\u001b[m');
}

/**
 * Export `requireShouldAssertionExecution`.
 */

module.exports = function() {};

module.exports.prototype = {
  check: (file, errors) => {
    if (!assertions || !chains) {
      return;
    }

    file.iterateNodesByType('Identifier', (node) => {
      if (!node.parentNode || !node.parentNode.object || !node.parentNode.object.property) {
        return;
      }

      // Skip non-assertions.
      if (assertions.indexOf(node.name) === -1) {
        return;
      }

      // Skip assertion terms that are used in another conditions.
      if (chains.indexOf(node.parentNode.object.property.name) === -1) {
        return;
      }

      // Allow chaining.
      if (chains.indexOf(node.name) !== -1 && chains.indexOf(node.parentNode.object.property.name) !== -1) {
        return;
      }

      if (node.parentNode.parentNode.type !== 'CallExpression') {
        errors.add(`You must invoke the assertion in \`should.${node.name}\``, node.loc.end);
      }
    });
  },

  configure: (requireShouldAssertionExecution) => {
    assert(
      requireShouldAssertionExecution === true || requireShouldAssertionExecution === false,
      'requireShouldAssertionExecution must be a boolean'
    );
  },

  getOptionName: () => {
    return 'requireShouldAssertionExecution';
  }
};
