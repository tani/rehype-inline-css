# Rehype Inline CSS

Rehype plugin to embed a stylesheet to each html elements.

## Installation

    npm install rehype-inline-css

## Usage

```js
import { unified } from 'unified'
import rehype from 'rehype-parse'
import stringify from 'rehype-stringify'
import inlineCss from './index.js'
const processor = unified().use(rehype).use(inlineCss).use(stringify)
const i = `<p>test</p><style>p { color: red; }</style>`
const o = processor.processSync(i).toString()
cosnole.log(o)
```

Now running the above script yields:

```html
<p style="color: red;">test</p>
```

## API

`rehype().use(inlineCss[, options])`

- `options` is the same as the options of [juice](https://www.npmjs.com/package/juice).

## Security

This plugin embeds all stylesheets in documents.
Please take care of Suspicious stylesheets.

## License

MIT &copy; TANIGUCHI Masaya

https://git.io/mit-license