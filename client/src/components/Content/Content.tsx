import {FC} from "react";
import {makeStyles} from '@mui/styles';
import {Outlet} from "react-router-dom";
import Navigation from "@/components/Navigation";

const useStyles = makeStyles(({palette}: any) => ({
    main: {
        backgroundColor: palette.mode === 'dark' ? '#1A2027' : '#fff',
        height: "93vh",
        display: "flex",
        flexDirection: "row"
    },
    navigationColumn: {
        height: "100%",
        backgroundColor: palette.mode === 'dark' ? '#272727' : '#fff',
        color: palette.mode === 'dark' ? "#fff" : '#272727',
        flexBasis:"10%"
    },
    contentColumn: {
        height: "100%",
        flex: "1 1 90%",
        padding:"8px"
    }
}));

const Content: FC = () => {
    const styles = useStyles();

    return (
        <main className={styles.main}>
            <div className={styles.navigationColumn}>
                <Navigation/>
            </div>
            <div className={styles.contentColumn}>
                <Outlet/>
            </div>
        </main>
    )
}

export {Content}