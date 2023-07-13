
import { InputHTMLAttributes, ButtonHTMLAttributes } from "react"
import { Comment, Manage } from "./types";

export interface InputProps extends Omit<InputHTMLAttributes <HTMLInputElement>, "size"> {
    size: string
}

export interface UnorderedListProps {
    className: string,
    variant: string,
    color: string,
    listItems: string[],
}

export interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    color: string,
    size: string
}

export interface ManageCardProps {
    manage: Manage
}

export interface CommentCardProps {
    comment: Comment
}