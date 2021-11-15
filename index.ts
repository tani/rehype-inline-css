import fromParse5 from 'hast-util-from-parse5'
import toHtml from 'hast-util-to-html'
import { parseFragment } from 'parse5'
import juice, { Options} from 'juice'
import type { Root } from 'hast'

export default (options: Options) => function transformer(tree: Root) {
    const html = toHtml(tree)
    const src = juice(html, options)
    const doc = parseFragment(src)
    const hast = fromParse5(doc)
    return hast
}
