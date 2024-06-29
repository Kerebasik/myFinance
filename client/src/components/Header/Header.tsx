import {AppBar, Chip, Toolbar, Typography} from "@mui/material";
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
                    <Chip label={"Data usd"} sx={{marginLeft:"20px",marginRight:"20px"}}/>
                    <ThemeChanger/>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export {Header}



