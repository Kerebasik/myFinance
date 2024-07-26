import {Gauge, gaugeClasses} from "@mui/x-charts";
import {Card, CardContent, Container, Stack, Typography} from "@mui/material";
import {UserJar} from "@/types/bank.ts";
import {FC} from "react";
import {CurrencyCodsISO} from "@/enums/currencyCodsISO.ts";

type JarCardProps = {
    jar: UserJar
}

const CurrencyName = new Map([
    [CurrencyCodsISO.UAH, "UAH"],
    [CurrencyCodsISO.USD, "USD"],
    [CurrencyCodsISO.EUR, "EUR"],
])


const JarCard: FC<JarCardProps> = ({jar}) => {
    return (
        <Card variant={"outlined"}>
            <CardContent>
                <Stack direction="row"
                       spacing={2}
                       justifyContent="space-between"
                       alignItems="center"
                >
                    <Container disableGutters>
                        <Stack direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
                            <Typography variant={"body1"} component={"div"}>{jar.title}</Typography>
                            <Typography variant={"body1"}
                                        component={"div"}>{jar.balance / 100} {CurrencyName.has(jar.currencyCode) ? CurrencyName.get(jar.currencyCode) : null}</Typography>
                        </Stack>
                    </Container>

                    <Gauge width={150}
                           height={150}
                           value={jar.balance / 100}
                           valueMin={0}
                           valueMax={jar.goal / 100}
                           text={
                               ({value, valueMax}) => `${(value! / valueMax * 100).toFixed(2)}%`
                           }
                           sx={{
                               [`& .${gaugeClasses.valueText}`]: {
                                   fontSize: 28
                               },
                               [`& .${gaugeClasses.valueArc}`]: {
                                   fill: +(jar.balance / jar.goal).toFixed(2) >= 1 && '#52b202',
                               },
                           }}
                    />
                </Stack>
            </CardContent>
        </Card>
    )
}

export {JarCard}