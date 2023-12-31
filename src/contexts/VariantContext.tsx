import { createContext } from "react"
import { VariantContextType } from "../types/contexts"
import { Contextable } from "../types/types"

const sizeVariants: Record <string, string> = {
    base: "h-10 px-4 border rounded-md",
    baseFull: "h-10 px-6 border rounded-full",
    baseFull2: "h-10 border rounded-full"
}

const colorVariants: Record <string, string> = {
    "red": "text-white border-red shadow-sm shadow-red bg-red",
    "white": "text-red border-white bg-white shadow-sm shadow-neutral-200",
    "blue": "text-blue indent-4 placeholder-blue border-transparent foinval:border-red foinval:ring-1 foinval:ring-red foinval:text-red invalid:text-red invalid:border-red"
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