import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Theme} from "@/hoc/Theme.tsx";
import {StylesProvider} from "@mui/styles";
import {Provider} from "react-redux";
import {setupStore} from "@/store";
import {ToastifyProvider} from "@/hoc/ToastifyProvider.tsx";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

const Root = ReactDOM.createRoot(document.getElementById('root')!)

const store = setupStore()

Root.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Provider store={store}>
                <StylesProvider>
                    <Theme>
                        <ToastifyProvider>
                            <App/>
                        </ToastifyProvider>
                    </Theme>
                </StylesProvider>
            </Provider>
        </LocalizationProvider>
    </React.StrictMode>,
)
