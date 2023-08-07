import React from "react";
import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <div>
            <h1>Host Dashboard here</h1>
            <Outlet/>
        </div>
    )

}