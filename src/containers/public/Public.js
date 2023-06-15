import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

//Set color để làm tùy chỉnh theme
import theme from "../../utils/theme.js";

const Public = () => {
    return (
        <div className="w-full h-screen flex">
            <div className={`w-[240px] flex-none ${theme['PURPLE'].SidebarLeftBg}`}>
                <SidebarLeft></SidebarLeft>
            </div>
            <div className="flex-auto">
              <Outlet></Outlet>
            </div>
            <div className="w-[330px] flex-none">
                <SidebarRight></SidebarRight>
            </div>
        </div>
    );
};

export default Public;
