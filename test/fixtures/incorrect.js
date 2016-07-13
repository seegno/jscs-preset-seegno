'use strict';

// `disallowKeywordsOnNewLine`.
let disallowKeywordsOnNewLine = true;

if (disallowKeywordsOnNewLine) {
  disallowKeywordsOnNewLine = false;
}
else {
  disallowKeywordsOnNewLine = true;
}

// `disallowNewlineBeforeBlockStatements`
let disallowNewlineBeforeBlockStatements = true;

if (disallowNewlineBeforeBlockStatements)
{
  disallowNewlineBeforeBlockStatements = false;
}

// `requireBlocksOnNewline`
let requireBlocksOnNewline = true;

if (requireBlocksOnNewline) { requireBlocksOnNewline = false; requireBlocksOnNewline = true; }

// `requireCapitalizedComments`.

// non capitalized comment.

// `requireLineBreakAfterVariableAssignment`.
const requireLineBreakAfterVariableAssignment1 = 'foo'; const requireLineBreakAfterVariableAssignment2 = 'bar';

// `requireMatchingFunctionName`.
const requireMatchingFunctionName = {};

requireMatchingFunctionName.foo = function bar() {};

// `requirePaddingNewLineAfterVariableDeclaration`.
const requirePaddingNewLineAfterVariableDeclaration = { foo: 'bar' };
requirePaddingNewLineAfterVariableDeclaration.foo = 'baz';

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

// `requirePaddingNewLinesBeforeLineComments`.
const requirePaddingNewLinesBeforeLineComments1 = 'foo';
// A comment.
const requirePaddingNewLinesBeforeLineComments2 = 'bar';

// `requireSqlTemplate`.
const requireSqlTemplate = `SELECT * FROM ${'foobar'}`;
