import {useCallback, useContext, useState} from "react";
import {lightTheme} from "../themes/light.ts";
import {darkTheme} from "../themes/dark.ts";
import {THEMES} from "@/constants/themes.ts";
import {ThemeContext} from "@/hoc/Theme.tsx";

const mapThemes = new Map([
    [THEMES.dark, darkTheme],
    [THEMES.light, lightTheme]
])

const useCustomTheme = () => {
    const [currentTheme, setTheme] = useState<any>(mapThemes.get(THEMES.dark)!)

    const handleThemeChange = useCallback(()=>{
        setTheme(
            mapThemes.get(
                currentTheme?.palette?.mode === THEMES.dark ? THEMES.light : THEMES.dark
            )!
        )
    },[currentTheme])

    const contextTheme = useContext<ThemeContext>(ThemeContext);

    return (
        {
            currentTheme,
            contextTheme,
            handleThemeChange
        }
    )
}

export { useCustomTheme };