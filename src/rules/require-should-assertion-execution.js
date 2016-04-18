'use strict';

/**
 * Module dependencies.
 */

const assert = require('assert');
const should = require('should');

/**
 * Auxiliary constants.
 */

const Assertion = should.Assertion.prototype;
const assertions = Object.keys(Assertion);
const chains = Object.keys(Assertion).filter(key => typeof Assertion[key] !== 'function');

/**
 * Export `requireShouldAssertionExecution`.
 */

module.exports = function() {};

module.exports.prototype = {
  check: (file, errors) => {
    file.iterateNodesByType('Identifier', (node) => {
      if (!node.parentElement || !node.parentElement.object || !node.parentElement.object.property) {
        return;
      }

      // Skip non-assertions.
      if (assertions.indexOf(node.name) === -1) {
        return;
      }

      // Skip assertion terms that are used in another conditions.
      if (chains.indexOf(node.parentElement.object.property.name) === -1) {
        return;
      }

      // Allow chaining.
      if (chains.indexOf(node.name) !== -1 && chains.indexOf(node.parentElement.object.property.name) !== -1) {
        return;
      }

      if (node.parentElement.parentElement.type !== 'CallExpression') {
        errors.add(`You must invoke the assertion in \`should.${node.name}\``, node);
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
