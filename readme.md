# `an-array-of-french-words`

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of ~336,000 French words.
Derived from [the Letterpress word list][letterpress].

## Install

[npm][]:

```sh
npm install an-array-of-french-words
```

## Use

```js
var words = require('an-array-of-french-words')

console.log(words.filter(d => /mots/.test(d)))
```

Yields:

```js
[
  'guillemots',
  'marmots',
  'mots',
  'mots-clés',
  'mots-croisiste',
  // …and more
]
```

## API

### `anArrayOfFrenchWords`

`Array.<string>` — List of all French words, lowercased.

## CLI

Install the CLI globally:

```sh
npm i -g an-array-of-french-words
```

Now run `mots` (or `an-array-of-french-words`) to print all words:

```sh
mots
```

See [`an-array-of-english-words`][english] for more CLI examples.

## Related

*   [`an-array-of-spanish-words`][spanish]
*   [`an-array-of-english-words`][english]
*   [`similar-english-words`](https://github.com/words/similar-english-words)

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/an-array-of-french-words.svg

[build]: https://travis-ci.org/words/an-array-of-french-words

[downloads-badge]: https://img.shields.io/npm/dm/an-array-of-french-words.svg

[downloads]: https://www.npmjs.com/package/an-array-of-french-words

[size-badge]: https://img.shields.io/bundlephobia/minzip/an-array-of-french-words.svg

[size]: https://bundlephobia.com/result?p=an-array-of-french-words

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://zeke.sikelianos.com

[letterpress]: https://github.com/lorenbrichter/Words

[english]: https://github.com/words/an-array-of-english-words

[spanish]: https://github.com/words/an-array-of-spanish-words
