import { useContext } from "react"
import { InputProps } from "../types/props"

const Input = ({ className, type, value, color, size, placeholder, onClick, onChange }: InputProps) => {
    return (
        <input 
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