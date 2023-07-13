import { createContext } from "react"
import { VariantContextType } from "../types/contexts"
import { Contextable } from "../types/types"

const sizeVariants: Record <string, string> = {
    base: "h-10 px-4 border rounded-md",
    baseFull: "h-10 px-6 border rounded-full",
    baseFull2: "h-10 border rounded-full"
}

const colorVariants: Record <string, string> = {
    "red-100": "text-white border-red shadow-sm shadow-red bg-red",
    "white-100": "text-red border-white bg-white shadow-sm shadow-neutral-200",
    "blue-100": "text-blue indent-4 placeholder-blue border-transparent"
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