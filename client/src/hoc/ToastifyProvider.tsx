import { ToastContainer } from "react-toastify";
import {FC, ReactNode} from "react";
import 'react-toastify/dist/ReactToastify.css';

type ToastifyProviderProps = {
    children:ReactNode
}

const ToastifyProvider:FC<ToastifyProviderProps> = ({children})=>{
    return (
        <>
            {children}
            <ToastContainer
                position={"bottom-left"}
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export {ToastifyProvider}