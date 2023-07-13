import { useContext } from "react"
import { UnorderedListProps } from "../types/props"
import { UnorderedListContext } from "../contexts/UnorderedListContext"

const UnorderedList = ({ className, variant, listItems }: UnorderedListProps) => {
    const { classUnordered } = useContext(UnorderedListContext)
    return (
        <ul className={`${classUnordered[variant]} ${className}`}>
            {listItems.map((item, key) => (
                <li key={key}><a href="#">{item}</a></li>
            ))}
        </ul>
    )
}

UnorderedList.defaultProps = {
    className: ""
}

export { UnorderedList }