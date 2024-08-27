import {NavLink} from "react-router-dom";
import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {ReactNode} from "react";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

type NavButton = {
    text: string;
    to: string;
    icon: ReactNode;
}

const NavButtons: NavButton[] = [
    {
        text:"Bank",
        to:"/",
        icon: <AccountBalanceIcon/>
    },
    {
        text:"Crypto",
        to:"/crypto",
        icon: <CurrencyBitcoinIcon/>
    }
]


export const Navigation = () =>{
    return(
        <List component="nav">
            {
                NavButtons.map((item)=>(
                    <NavLink key={crypto.randomUUID()} to={item.to}>
                        {({ isActive }) => (
                            <ListItemButton
                                selected={isActive}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        )}
                    </NavLink>
                ))
            }
        </List>
    )
}
