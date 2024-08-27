import "./reset.css"
import "./App.css"
import {useInitialStore} from "@/hooks/useInitialStore.ts";
import {router} from "@/router/router.tsx";
import {RouterProvider} from "react-router-dom";

function App() {
    useInitialStore()
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
