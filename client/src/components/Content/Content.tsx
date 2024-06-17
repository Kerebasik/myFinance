import {FC} from "react";
import {Container} from "@mui/material";
import {makeStyles} from '@mui/styles';

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
           <Container>

           </Container>
        </main>
    )
}

export { Content }