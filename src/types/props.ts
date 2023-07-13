import { InputHTMLAttributes } from "react"

export interface InputProps extends Omit<InputHTMLAttributes <HTMLInputElement>, "size"> {
    size: string
}

export interface UnorderedListProps {
    className: string,
    variant: string,
    listItems: string[],
}