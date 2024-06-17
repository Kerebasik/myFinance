import {FC, createContext, ReactNode} from "react";
import {ThemeProvider} from "@mui/material";
import {useCustomTheme} from "../hooks/useCustomTheme.ts";
import {darkTheme} from "@/themes/dark.ts";

export type ThemeContext = {
    currentTheme:Object,
    handleThemeChange:()=>void
}

type Theme = {
    children: ReactNode
}

const initialThemeContext:ThemeContext = {
    currentTheme: darkTheme,
    handleThemeChange: ()=>{}

}

export const ThemeContext = createContext<ThemeContext>(initialThemeContext)

const Theme: FC<Theme> = ({children}) => {
    const {currentTheme, handleThemeChange} = useCustomTheme()
    const valueThemeContext:ThemeContext = {currentTheme, handleThemeChange}

    return (
        <ThemeContext.Provider value={valueThemeContext}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export {Theme}