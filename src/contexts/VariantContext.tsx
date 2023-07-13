import { createContext } from "react"
import { VariantContextType } from "../types/contexts"
import { Contextable } from "../types/types"

const sizeVariants: Record <string, string> = {
    base: "h-10 px-4 border rounded-md",
    baseFull: "h-10 px-6 border rounded-full shadow-sm shadow-red"
}

const colorVariants: Record <string, string> = {
    "red-100": "text-white border-red bg-red",
    "white-100": "text-red border-white bg-white shadow-sm shadow-neutral-200"
}

const VariantContext = createContext <VariantContextType> ({
    sizeVariants,
    colorVariants
})

const VariantProvider = ({ children }: Contextable) => {
    return (
        <VariantContext.Provider value={{ colorVariants, sizeVariants }}>
            {children}
        </VariantContext.Provider>
    )
}

export {  VariantContext, VariantProvider }