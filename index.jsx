import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
    Route,  }
 from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, {loader as vansLoader} from "./pages/Vans/Vans"
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans"
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail"
import "./server"
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Login, {action as loginAction, loader as loginLoader} from "./pages/Login";
import { requireAuth } from "./utils";
import Error from "./components/Error";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
            path= "login"
            element={<Login/>}
            loader={loginLoader}
            action={loginAction}
        />
        <Route
            path= "/vans"
            element={<Vans/>}
            errorElement={<Error/>}
            loader ={ vansLoader }/>
        <Route
            path= "/vans/:id"
            element={<VanDetail />}
        loader={vanDetailLoader}
        />


        <Route path= "host" element={<HostLayout />}>

            <Route
                index
                element={<Dashboard />}
                loader={ async ({ request }) => await requireAuth(request)}
            />
            <Route
                path= "income"
                element={<Income />}
                loader={ async ({ request }) => await requireAuth(request)}
            />
            <Route
                path= "reviews"
                element={<Reviews />}
                loader={ async ({ request }) => await requireAuth(request)}
            />
            <Route
                path= "vans"
                element={<HostVans />}
                errorElement={<Error/>}
                loader={hostVansLoader}
            />
            <Route
                path= "vans/:id"
                element={<HostVanDetail />}
                errorElement={<Error/>}
                loader={ hostVanDetailLoader }
            >
                <Route
                    index
                    element={<HostVanInfo/>}
                    loader={ async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path= "pricing"
                    element={<HostVanPricing/>}
                    loader={ async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path= "photos"
                    element={<HostVanPhotos/>}
                    loader={ async ({ request }) => await requireAuth(request)}
                />
            </Route>
        </Route>
        <Route path= "*" element={<NotFound />} />
    </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);