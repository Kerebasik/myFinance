import "./reset.css"
import "./App.css"
import Header from "@/components/Header";
import Content from "@/components/Content";
import {useInitialStore} from "@/hooks/useInitialStore.ts";

function App() {
    useInitialStore()

    return (
        <>
            <Header/>
            <Content/>
        </>
    )
}

export default App
