import {FC, useMemo} from "react";
import {IconButton, useTheme} from "@mui/material";
import {THEMES} from "@/constants/themes.ts";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useCustomTheme} from "@/hooks/useCustomTheme.ts";

const iconMap = new Map([
    [THEMES.dark, <Brightness7Icon/>],
    [THEMES.light, <Brightness4Icon/>]
])

const ThemeChanger: FC = () => {
    const {palette} = useTheme()
    const {handleThemeChange} = useCustomTheme().contextTheme

    const iconForButton = useMemo(() => (
        iconMap.get(palette.mode)
    ), [palette.mode])

    return (
        <IconButton onClick={handleThemeChange}>
            {
                iconForButton
            }
        </IconButton>
    )
}

export {ThemeChanger}