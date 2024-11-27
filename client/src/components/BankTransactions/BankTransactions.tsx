import {Box, Divider, IconButton} from "@mui/material";
import {LineChart} from "@mui/x-charts";
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';

import {useState} from "react";
import RangeDatePicker from "@/components/RangeDatePicker";

const BankTransactions = () => {
    const [showCharts, setShowCharts] = useState<boolean>(true)

    return (
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} sx={{p:1, height: "90vh"}}>
            <Box flex={"1 1"}>
                <Box display={"flex"} flexDirection={"row"} justifyContent={"end"} sx={{pb: 1}}>
                    <RangeDatePicker/>
                    <IconButton onClick={() => setShowCharts(!showCharts)}>
                        <TimelineRoundedIcon color={showCharts ? "action" : "disabled"}/>
                    </IconButton>
                </Box>
                <Divider/>
                {
                    showCharts &&
                    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                    </Box>
                }
            </Box>
            <Box flex={"1 1 80%"}>
                dsad
            </Box>
        </Box>
    )
}

export {BankTransactions}