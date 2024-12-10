import Link from "next/link";
import Image from "next/image";
import { FaHome, FaHashtag, FaRegListAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
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
    { name: "Perfil", href: "/perfil", icon: <CgProfile /> },
    { name: "Más", href: "/mas", icon: <GoPlusCircle /> },
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

                <button className="bg-blue-500 text-white justify-center p-2 rounded-3xl text-xl mt-8 text-">
                    Echo
                </button>
            </div>
            <div className="flex flex-row gap-4 items-center">
                <Link href="/perfil">
                    <Image
                        src="/avatar.png"
                        alt="Perfil"
                        width={40}
                        height={40}
                    />
                </Link>
                <div className="flex flex-col justify-center">
                    <p className="text-black text-lg">
                        Abraham Rafael Castillo
                    </p>
                    <p className="text-[#7A7C7F] text-sm">@abrahamcastillo</p>
                </div>
                <SiConvertio color="black" className="hover:cursor-pointer" />
            </div>
        </div>
    );
};
