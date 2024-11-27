import {Box, Fade, IconButton, Popper, Typography} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers";
import {SyntheticEvent, useCallback, useEffect, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

enum RangeType {
    to = "to",
    from = "from"
}

const RangeDatePicker = () => {
    const [date, setDate] = useState<{ from: string, to: string }>({
        from: dayjs().subtract(1, "month").format(),
        to: dayjs().format()
    })

    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    const handleChange = useCallback((newValue: Dayjs, rangeType: RangeType.from | RangeType.to) => {
        const rangeTypeActionMap = new Map([
            [RangeType.from, () => {
                const dateTo = dayjs(date.to)
                return dateTo.diff(newValue, 'day') < 0 ? dateTo : newValue
            }],
            [RangeType.to, () => {
                const dateFrom = dayjs(date.from)
                return dateFrom.diff(newValue, 'day') > 0 ? dateFrom : newValue
            }]
        ])

        setDate(prevState => {
            return ({
                ...prevState,
                [rangeType]: rangeTypeActionMap.get(rangeType)?.().format()
            })
        });
    }, [date])

    useEffect(() => {
        console.log(date)
    }, [date])

    return (
        <>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <CalendarMonthIcon/>
            </IconButton>
            <Popper id={id} placement="bottom-end" open={open} anchorEl={anchorEl} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box width={300}>
                            <DemoContainer components={['DatePicker', "DatePicker"]}>
                                <Box display={"flex"} p={1} flexDirection={"column"} gap={1} sx={{
                                    bgcolor: "background.default",
                                }}>
                                    <Typography variant="h6" sx={{color: "text.primary"}}>from:</Typography>
                                    <DemoItem>
                                        <DatePicker value={dayjs(date.from)} name={RangeType.from}
                                                    onChange={(newValue) => handleChange(newValue!, RangeType.from)}
                                                    defaultValue={dayjs(date.from)}/>
                                    </DemoItem>
                                    <Typography variant="h6" sx={{color: "text.primary"}}>to:</Typography>
                                    <DemoItem>
                                        <DatePicker value={dayjs(date.to)} name={RangeType.to}
                                                    onChange={(newValue) => handleChange(newValue!, RangeType.to)}
                                                    defaultValue={dayjs(date.to)}/>
                                    </DemoItem>
                                </Box>
                            </DemoContainer>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </>
    )
}

export {RangeDatePicker}