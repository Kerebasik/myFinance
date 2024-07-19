import {Gauge} from "@mui/x-charts";
import {Container, Stack, Typography} from "@mui/material";

const JarCard = ({valueMax = 10, value = 3, name = "Jar"}) => {
    return (
        <Stack direction="row"
               spacing={2}
               justifyContent="space-between"
               alignItems="center"
        >
            <Container disableGutters>
                <Typography variant={"body1"} component={"div"}>{name}</Typography>
            </Container>
            <Gauge width={100}
                   height={100}
                   value={value}
                   valueMin={0}
                   valueMax={valueMax}
                   text={
                       ({value, valueMax}) => `${value! / valueMax * 100}%`
                   }
            />
        </Stack>
    )
}

export {JarCard}