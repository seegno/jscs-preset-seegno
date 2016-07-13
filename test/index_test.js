'use strict';

/**
 * Module dependencies.
 */

const Linter = require('jscs/lib/checker');
const config = require('../');
const omit = require('lodash.omit');
const path = require('path');

/**
 * Test `jscs-preset-seegno`.
 */

describe('jscs-preset-seegno', () => {
  let linter;

  before(() => {
    linter = new Linter();
    linter.registerDefaultRules();
    linter.configure(Object.assign(config, { additionalRules: [path.join(__dirname, '..', 'src', 'rules', '*.js')] }));
  });

  it('should not generate any violation for correct code', () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');

    return linter.checkPath(source)
      .then(results => {
        results[0].getErrorList().should.be.empty();
      });
  });

  it('should generate violations for incorrect code', () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const rules = omit(config, ['additionalRules', 'excludeFiles']);

    return linter.checkPath(source)
      .then(results => {
        results[0].getErrorList().map(error => error.rule).should.containDeep(Object.keys(rules));
      });
  });
});
