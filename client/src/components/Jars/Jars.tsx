import JarCard from "@/components/JarCard";
import {Box, CircularProgress, Stack} from "@mui/material";
import {FC, useEffect, useMemo} from "react";
import type {JarsPropsFromRedux} from "@/components/Jars/index.ts";
import {toast} from "react-toastify";

type JarsProps = JarsPropsFromRedux & {}

const Jars: FC<JarsProps> = ({userData, userDataError, userDataLoading}) => {

    useEffect(() => {
        userDataError && toast.error(userDataError)
    }, [userDataLoading, userDataError]);


    const JarsList = useMemo(() => {
        return userData?.jars?.map((jar) => (<JarCard key={jar.title + jar.description + Date.now()} jar={jar}/>))
    }, [userData])

    return (
        <Box p={1} sx={{minHeight: "316px"}}>
            {
                userDataLoading ?
                    <Stack justifyContent={"center"} alignItems={"center"}>
                        <CircularProgress color="inherit" size={40}/>
                    </Stack>

                    :
                    JarsList
            }
        </Box>
    )
}

export {Jars}