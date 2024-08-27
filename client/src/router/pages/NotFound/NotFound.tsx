import {Box} from "@mui/material";
import {styled} from "@mui/styles";

const Wrapper = styled(Box)(({theme}: any) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    borderRadius: "0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width: "100vw",
    height: "100vh"
}));

const NotFound = () => {
    return (
        <Wrapper>
            <div>404 Not Found</div>
        </Wrapper>
    )
}

export {NotFound}