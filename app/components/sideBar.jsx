"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaHashtag, FaRegListAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { SiConvertio } from "react-icons/si";

const Links = [
    { name: "Inicio", href: "/", icon: <FaHome /> },
    { name: "Explorar", href: "/error", icon: <FaHashtag /> },
    {
        name: "Notificaciones",
        href: "/notificaciones",
        icon: <IoNotificationsOutline />,
    },
    { name: "Mensajes", href: "/error", icon: <LuMessageSquare /> },
    { name: "Guardados", href: "/error", icon: <MdSaveAlt /> },
    { name: "Listados", href: "/error", icon: <FaRegListAlt /> },
    { name: "Más", href: "/error", icon: <GoPlusCircle /> },
    { name: "Login", href: "/login", icon: <IoIosLogIn /> },
];

export const SideBar = () => {
    return (
        <div className="flex flex-col min-h-full p-4">
            <div className="flex flex-col flex-grow">
                {Links.map((link, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-row text-black gap-4 p-2 items-center text-xl hover:cursor-pointer hover:text-blue-500"
                        >
                            {link.icon}
                            <Link href={link.href}>{link.name}</Link>
                        </div>
                    );
                })}

                <Link href={"/error"}>
                    <button className="bg-blue-500 text-white justify-center p-2 rounded-3xl text-xl mt-8 w-full">
                        Echo
                    </button>
                </Link>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Link href="/profile">
                    <img
                        src="/avatar.png"
                        alt="Perfil"
                        width={40}
                        height={40}
                    />
                </Link>
                <div className="flex flex-col justify-center">
                    <p className="text-black text-lg">
                        Abraham Rodriguez Martinez
                    </p>
                    <p className="text-[#7A7C7F] text-sm">
                        @abrahamrodriguez00
                    </p>
                </div>
                <SiConvertio
                    color="black"
                    className="hover:cursor-pointer ml-auto"
                />
            </div>
        </div>
    );
};
