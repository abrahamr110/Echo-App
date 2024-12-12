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
    { name: "Explorar", href: "/explorar", icon: <FaHashtag /> },
    {
        name: "Notificaciones",
        href: "/notificaciones",
        icon: <IoNotificationsOutline />,
    },
    { name: "Mensajes", href: "/mensajes", icon: <LuMessageSquare /> },
    { name: "Guardados", href: "/guardados", icon: <MdSaveAlt /> },
    { name: "Listados", href: "/listados", icon: <FaRegListAlt /> },
    { name: "Más", href: "/mas", icon: <GoPlusCircle /> },
    { name: "Login", href: "/login", icon: <IoIosLogIn /> },
];

export const SideBar = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        const url = "https://randomuser.me/api/?results=20";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-black text-lg">Cargando...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }

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
