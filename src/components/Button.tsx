import { useContext } from "react"
import { ButtonProps } from "../types/props"
import { VariantContext } from "../contexts/VariantContext"

const Button = ({ className, children, color, size, onClick }: ButtonProps) => {
    const { sizeVariants, colorVariants } = useContext(VariantContext)
    const classList = `${sizeVariants[size]} ${colorVariants[color]} ${className}`

    return (
        <button className={classList} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    className: ""
}

export { Button }