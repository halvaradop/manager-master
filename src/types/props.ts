import { ButtonHTMLAttributes } from "react";
import { Comment, Manage } from "./types";

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