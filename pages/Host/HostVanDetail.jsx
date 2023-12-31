import React from "react";
import {Link, Outlet, NavLink, useLoaderData} from "react-router-dom"
import { getVan } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params, request }) {
    await requireAuth(request)
    return getVan(params.id)
}

export default function HostVanDetail() {

    // const [currentVan, setCurrentVan] = React.useState(null)
    const currentVan = useLoaderData();

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (

            <section>
                <Link
                    to=".."
                    relative= "path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>

                <div className= "host-van-detail-layout-container">
                    <div className= "host-van-detail">
                        <img src={currentVan.imageUrl} />
                        <div className= "host-van-detail-info-text">
                            <i className={`van-type van-type-${currentVan.type}`}>
                                {currentVan.type}
                            </i>
                            <h3>{currentVan.name}</h3>
                            <h4>{currentVan.price}</h4>
                        </div>
                    </div>

                    <nav className= "host-van-detail-nav">
                        <NavLink
                            to= "."
                            end
                            style = {({isActive}) => isActive ? activeStyle : null}
                        >
                            Details</NavLink>
                        <NavLink
                            to= "pricing"
                            style = {({isActive}) => isActive ? activeStyle : null}
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to= "photos"
                            style = {({isActive}) => isActive ? activeStyle : null}
                        >
                            Photos
                        </NavLink>


                    </nav>

                    <Outlet context={ {currentVan} } />
                </div>
            </section>

    )
}