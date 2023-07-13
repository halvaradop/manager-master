import { createContext } from "react";
import { Contextable } from "../types/types";
import { UnorderedListContextType } from "../types/contexts";

const classUnordered: Record <string, string> = {
    "flex-100": "flex flex-col gap-y-4 text-white",
    "flex-200": "flex items-center flex-col gap-y-5 text-blue-200 font-bold"
}

const classUnorderedColor: Record <string, string> = {
    "white": "textw-hite",
    "blue-200": "text-blue-200 font-bold"
}

const UnorderedListContext = createContext <UnorderedListContextType> ({
    classUnordered,
    classUnorderedColor
})

const UnorderesProvider = ({ children }: Contextable) => {
    return (
        <UnorderedListContext.Provider value={{ classUnordered, classUnorderedColor }}>
            {children}
        </UnorderedListContext.Provider>
    )
}

export { UnorderedListContext, UnorderesProvider }