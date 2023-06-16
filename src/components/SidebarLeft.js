import React from "react";
import logo from "../assets/img/logo-dark.svg";
import { sidebar } from "../utils/Sidebar";
import { NavLink } from "react-router-dom";

const active =
    "flex items-center h-[48px] py-2 px-[25px] text-[#dadada] gap-[12px] bg-[#3a3144] before:absolute before:content-['']";
const notActive =
    "flex items-center h-[48px] py-2 px-[25px] text-[#dadada] gap-[12px]";

const SidebarLeft = () => {
    return (
        <div className="flex flex-col">
            <div className="w-full h-[70px] px-[25px] flex items-center">
                <img src={logo} className="w-[120px] h-10 object-contain"></img>
            </div>
            <div className="flex flex-col">
                {sidebar.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) =>
                            isActive ? active : notActive
                        }
                    >
                        {item.icon}
                        <span className="text-[14px] font-semibold">
                            {item.title}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
