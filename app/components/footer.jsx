import Link from "next/link";

const links = [
    {
        name: "Información",
        href: "/informacion",
    },
    {
        name: "Descarga la app de Echo",
        href: "/descarga",
    },
    {
        name: "Política de Privacidad",
        href: "/politica-de-privacidad",
    },
    {
        name: "Accesibilidad",
        href: "/accesibilidad",
    },
    {
        name: "Polítiica de Cookies",
        href: "/politica-de-cookies",
    },
    {
        name: "Publicidad",
        href: "/publicidad",
    },
    {
        name: "Condiciones de Servicio",
        href: "/condiciones-de-servicio",
    },
];

export const Footer = () => {
    return links.map((link, index) => (
        <Link
            className="text-center text-sm text-[#7A7C7F]"
            href={link.href}
            key={index}
        >
            {link.name}
        </Link>
    ));
};
