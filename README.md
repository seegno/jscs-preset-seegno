# jscs-preset-seegno
Seegno-flavored JSCS preset.

## Installation

```sh
$ npm install jscs jscs-preset-seegno --save-dev
```

## Usage
Create an `.jscsrc` file with the following:

```yaml
preset: seegno
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint": "jscs ."
  }
}
```

and run the linter with:

```sh
$ npm run lint
```

## Custom rules
The preset includes the following list of custom rules.

### `requireSqlTemplate`
Disallows the usage of raw SQL templates with interpolation.

This rule enforces the usage of a library such as [sql-tag](https://github.com/seegno/sql-tag), which escapes data provided to an SQL query statement via interpolation, helping to avoid, for instance, potential injection attacks.

Requires: `sql-tag`

Type: `Boolean`

Value: `true`

#### Example

```json
requireSqlTemplate: true
```

#### Valid

```js
const column = '*';
const query = sql`SELECT ${column} FROM foobar`;

fn(sql`SELECT ${column} FROM foobar`)
```

#### Invalid

```js
const column = '*';
const query = `SELECT ${column} FROM foobar`;

fn(`SELECT ${column} FROM foobar`)
```
