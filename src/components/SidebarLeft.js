import React from "react";
import logo from "../assets/img/logo-dark.svg";

const SidebarLeft = () => {
    return (
        <div>
            <div className="w-full h-[70px] px-[25px] flex items-center">
                <img src={logo} className="w-[120px] h-10 object-contain"></img>
            </div>
        </div>
    );
};

export default SidebarLeft;
