import { createContext } from "react";
import { Contextable } from "../types/types";
import { UnorderedListContextType } from "../types/contexts";

const classUnordered: Record <string, string> = {
    "flex-100": "flex flex-col gap-y-4 text-white"
}

const UnorderedListContext = createContext <UnorderedListContextType> ({
    classUnordered
})

const UnorderesProvider = ({ children }: Contextable) => {
    return (
        <UnorderedListContext.Provider value={{ classUnordered }}>
            {children}
        </UnorderedListContext.Provider>
    )
}

export { UnorderedListContext, UnorderesProvider }