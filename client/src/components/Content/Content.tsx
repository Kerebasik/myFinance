import {FC} from "react";
import {Container, Grid, Paper} from "@mui/material";
import {makeStyles, styled} from '@mui/styles';
import {MaxWidthContainer} from "@/enums/viewportSize.ts";
import Jars from "@/components/Jars";
import BankTransactions from "@/components/BankTransactions";

const ColumnContainer = styled(Paper)(({ theme }:any) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(({palette}:any) => ({
    main:{
        backgroundColor:palette.background.default
    }
}));

const Content:FC = () =>{
    const classes = useStyles();

    return(
        <main className={classes.main}>
           <Container sx={{height:"100%"}} maxWidth={MaxWidthContainer.Large}>
               <Grid container spacing={2} sx={{mt:0.25}}>
                   <Grid item md={9}>
                       <ColumnContainer>
                           <BankTransactions/>
                       </ColumnContainer>
                   </Grid>
                   <Grid item md={3}>
                       <ColumnContainer>
                            <Jars/>
                       </ColumnContainer>
                   </Grid>
               </Grid>
           </Container>
        </main>
    )
}

export { Content }