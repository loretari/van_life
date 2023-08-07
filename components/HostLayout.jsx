import React from "react";
import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout () {
    const activeStyle = {
        fontWeight: "bold",
         textDecoration: "underline",
          color: "#161616"
    }



    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div>

                >
                    Income
                </NavLink>
                <NavLink

                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>

    )
}