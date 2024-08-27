import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {PublicRoutes} from "@/enums/routes.ts";
import NotFound from "@/router/pages/NotFound";
import RootLayout from "@/router/layouts/RootLayout";
import Bank from "@/router/pages/Bank";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={PublicRoutes.ROOT} element={<RootLayout/>}>
            <Route index element={<Bank/>}/>
            <Route path={PublicRoutes.CRYPTO} element={<Bank/>}/>
        </Route>
        <Route path={PublicRoutes.NOT_FOUND} element={<NotFound/>}/>
    </>
))

export {router}