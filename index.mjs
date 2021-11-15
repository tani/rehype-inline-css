import fromParse5 from 'hast-util-from-parse5'
import toHtml from 'hast-util-to-html'
import { parseFragment } from 'parse5'
import juice from 'juice'

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('juice').Options} Options
 * @type {import('unified').Plugin<[Options] | void[], Root>}
 */
export default (options) => function transformer(tree) {
    const html = toHtml(tree)
    const src = juice(html, options)
    const doc = parseFragment(src)
    const hast = fromParse5(doc)
    return hast
}
