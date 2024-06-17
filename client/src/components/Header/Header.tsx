import {AppBar, Toolbar, Typography} from "@mui/material";
import {ThemeChanger} from "@/components/Header/components/ThemeChanger.tsx";


const Header = () => {
    return (
        <header>
            <AppBar position={"static"} component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        MUI
                    </Typography>
                    <ThemeChanger/>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export {Header}



