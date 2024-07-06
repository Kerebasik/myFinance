import {AppBar, Chip, CircularProgress, Container, Toolbar, Typography} from "@mui/material";
import {ThemeChanger} from "@/components/Header/components/ThemeChanger.tsx";
import {MaxWidthContainer} from "@/enums/viewportSize.ts";
import {HeaderPropsFromRedux} from "@/components/Header/index.ts";
import {useEffect, useMemo} from "react";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";
import {toast} from "react-toastify";

type HeaderProps = {} & HeaderPropsFromRedux

const Header = ({currencyRate, currencyRateLoading, currencyRateError}:HeaderProps) => {

    useEffect(() => {
        currencyRateError && toast.error(currencyRateError)
    }, [currencyRateLoading, currencyRateError]);

    const selectedCurrencyRate = useMemo(()=>{
        if(currencyRateLoading){
            return <CircularProgress color="inherit" size={20} />
        }

        return currencyRate.find((item)=> item?.currencyCodeA === CurrencyCodsISO.USD)?.rateSell.toFixed(2)
    },[currencyRate, currencyRateLoading, currencyRateError])

    return (
        <header>
            <AppBar position={"static"} component="nav">
                <Container maxWidth={MaxWidthContainer.ExtraLarge}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >
                            MUI
                        </Typography>
                        <Chip label={selectedCurrencyRate} sx={{marginLeft:"20px",marginRight:"20px"}}/>
                        <ThemeChanger/>
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
}

export {Header}



