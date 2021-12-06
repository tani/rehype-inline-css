import test from 'tape'
import { unified } from 'unified'
import rehype from 'rehype-parse'
import stringify from 'rehype-stringify'
import inlineCss from './index.js'
const processor = unified().use(rehype, { fragment: true }).use(inlineCss).use(stringify)
test("Inlining a stylesheet", (t) => {
    const i = `<p>test</p><style>p { color: red; }</style>`
    const e = `<p style="color:red;">test</p>`
    const o = processor.processSync(i).toString()
    t.equal(o, e)
    t.end()
})
