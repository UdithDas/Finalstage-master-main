import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaEdit,
    FaStar,
    FaGlassCheers,
    FaAddressCard,
    FaPowerOff
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            // Heading for Registrations
            name: "REGISTRATION",
            isHeading: true,
        },
        {
            path: "/productList",
            name: "Restuarant Type",
            icon: <FaGlassCheers />
        },
        {
            path: "/product",
            name: "Restuarant Rating",
            icon: <FaStar />
        },
        {
            path: "/register",
            name: "Register Restuarant",
            icon: <FaEdit />
        },
        {
            // Heading for Registrations
            name: "VIEW",
            isHeading: true,
            icon: <FaEdit />

        },
        {
            path: "/analytics",
            name: "Restuarant Details",
            icon: <FaAddressCard />
        },
        {
            path: "/",
            name: "LogOut",
            icon: <FaPowerOff />
        }
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px", position: "fixed" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">DineOut</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        // Rendering based on whether it's a heading or a regular menu item
                        item.isHeading ? (
                            <h4 key={index} className="heading">{item.name}</h4>
                        ) : (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        )
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
