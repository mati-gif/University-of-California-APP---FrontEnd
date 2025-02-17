import React from "react";
import HeaderLogin from "../pages/HeaderLogin";
import { Outlet } from "react-router-dom";
import FooterHome from "../pages/FooterHome";

function PrivateLayout() {
    return (
        <>
            <HeaderLogin />
            <main>
                <Outlet />
            </main>
            <FooterHome />
        </>
    );
}

export default PrivateLayout;
