import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Theme} from "@/hoc/Theme.tsx";
import {StylesProvider} from "@mui/styles";
import {Provider} from "react-redux";
import {setupStore} from "@/store";
import {ToastifyProvider} from "@/hoc/ToastifyProvider.tsx";

const Root = ReactDOM.createRoot(document.getElementById('root')!)

const store = setupStore()

Root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider>
                <Theme>
                    <ToastifyProvider>
                        <App/>
                    </ToastifyProvider>
                </Theme>
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
)
