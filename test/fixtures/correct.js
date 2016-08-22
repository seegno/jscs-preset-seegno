'use strict';

// `disallowKeywordsOnNewLine`.
let disallowKeywordsOnNewLine = true;

if (disallowKeywordsOnNewLine) {
  disallowKeywordsOnNewLine = false;
} else {
  disallowKeywordsOnNewLine = true;
}

// `disallowNewlineBeforeBlockStatements`.
let mixedRules = true;

if (mixedRules) {
  mixedRules = false;
}

// `requireBlocksOnNewline`.
let requireBlocksOnNewline = true;

if (requireBlocksOnNewline) { requireBlocksOnNewline = false; }

// `requireCapitalizedComments`.

/* Capitalized comment. */

// `requireLineBreakAfterVariableAssignment`.
const requireLineBreakAfterVariableAssignment1 = 'foo';
const requireLineBreakAfterVariableAssignment2 = 'bar';

// `requireMatchingFunctionName`.
const requireMatchingFunctionName = {};

requireMatchingFunctionName.foo = function foo() {};

// `requirePaddingNewLinesAfterBlocks` and `requirePaddingNewlinesBeforeKeywords`.
function requirePaddingNewLinesAfterBlocks() {
  const foo = true;

  if (foo) {
    foo = false;
  }

  return true;
}

// `requirePaddingNewLinesBeforeExport`.
const requirePaddingNewLinesBeforeExport = 'foo';

module.exports = requirePaddingNewLinesBeforeExport;

// `requireSqlTemplate`.
const sql = require('sql-tag');
const requireSqlTemplate = sql`SELECT * FROM ${'foobar'}`;
