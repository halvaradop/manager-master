import { useContext } from "react"
import { InputProps } from "../types/props"
import { VariantContext } from "../contexts/VariantContext"

const Input = ({ className, type, value, color, size, placeholder, onClick, onChange }: InputProps) => {
    const { sizeVariants, colorVariants } = useContext(VariantContext)
    const classList = `${sizeVariants[size]} ${colorVariants[color]} ${className} focus:outline-none`

    return (
        <input 
            className={classList}
            type={type}
            value={value}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
        />
    )
}

Input.defaultProps = {
    className: "",
    type: "text",
    placeholder: "..."
}

export { Input }