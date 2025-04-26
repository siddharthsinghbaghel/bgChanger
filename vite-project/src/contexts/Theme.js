import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}


// minicontext me humne context alag aur  provider alag banaya tha 
// to ye style h ek sath likhne ka hai, ye bhi sahi hai