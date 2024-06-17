import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Theme} from "@/hoc/Theme.tsx";
import {StylesProvider} from "@mui/styles";

const Root = ReactDOM.createRoot(document.getElementById('root')!)

Root.render(
    <React.StrictMode>
        <StylesProvider>
            <Theme>
                <App/>
            </Theme>
        </StylesProvider>
    </React.StrictMode>,
)
