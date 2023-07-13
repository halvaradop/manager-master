import { useContext, memo } from "react"
import { UnorderedListProps } from "../types/props"
import { UnorderedListContext } from "../contexts/UnorderedListContext"

const UnorderedList = memo(({ className = "", classItem = "", variant, color, listItems }: UnorderedListProps) => {
    const { classUnordered, classUnorderedColor } = useContext(UnorderedListContext)
    return (
        <ul className={`${classUnordered[variant]} ${classUnorderedColor[color]} ${className}`}>
            {listItems.map((item, key) => (
                <li className={classItem} key={key}><a href="#">{item}</a></li>
            ))}
        </ul>
    )
})

export { UnorderedList }