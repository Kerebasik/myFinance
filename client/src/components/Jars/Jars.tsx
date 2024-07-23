import JarCard from "@/components/JarCard";
import {Box} from "@mui/material";
import {useAppSelector} from "@/hooks/redux/useAppSelector.ts";
import {useEffect} from "react";

const Jars = () => {
    const data = useAppSelector((state)=> state.bankReducers.userData)
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <Box p={1}>
            <JarCard/>
        </Box>
    )
}

export {Jars}