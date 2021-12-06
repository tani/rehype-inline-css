import type { Root } from 'hast'
import { selectAll } from "hast-util-select"
import { toString } from "hast-util-to-string";
import css from "css"
import { remove } from "unist-util-remove"

export default () => function transformer(tree: Root) {
    const stylesheet = selectAll('style', tree).map(toString).join("\n")
    const cast = css.parse(stylesheet)
    for (const rule of cast.stylesheet?.rules ?? []) {
        if ("selectors" in rule) {
            for(const selector of rule.selectors ?? []) {
                const elems = selectAll(selector, tree)
                for(const elem of elems) {
                    for(const declaration of rule.declarations ?? []) {
                        if("property" in declaration) {
                            elem.properties ??= {}
                            elem.properties.style ??= ""
                            if(/[^;]\s*$/.test(elem.properties.style as string)) {
                                elem.properties.style += ";"
                            }
                            elem.properties.style += `${declaration.property}:${declaration.value};`
                        }
                    }
                }
            }
        }
    }
    
    return remove(tree, { tagName: "style" })
}
