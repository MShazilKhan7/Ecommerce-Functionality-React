import React from "react";
import NavbarComp from "./navbar";
import { Outlet } from "react-router-dom";

export function RootLayout(){
    return (
        <>
        <NavbarComp/>
        <div className="main">
            <Outlet/>
        </div>
        </>
    )
}