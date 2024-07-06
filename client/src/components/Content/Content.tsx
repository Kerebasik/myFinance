import {FC} from "react";
import {Container} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {MaxWidthContainer} from "@/enums/viewportSize.ts";

// @ts-ignore
const useStyles = makeStyles(({palette}) => ({
    main:{
        backgroundColor:palette.background.default,
    }
}));

const Content:FC = () =>{
    const classes = useStyles();

    return(
        <main className={classes.main}>
           <Container maxWidth={MaxWidthContainer.Large}>
               fdsdsfdsfdsfds
           </Container>
        </main>
    )
}

export { Content }