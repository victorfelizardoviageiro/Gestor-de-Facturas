import React, {useState,createContext } from "react";
import { darkTheme } from "../themes";

export const GlobalContext = createContext();

function GlobalContextProvider({children}) {

    const [theme, setTheme] = useState(darkTheme);
    return (
        <GlobalContext.Provider value={{theme,setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;