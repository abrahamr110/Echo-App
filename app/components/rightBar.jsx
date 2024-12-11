import { IoSearchOutline } from "react-icons/io5";

const tendencias = [
    {
        title: "COVID 19",
        date: "12/12/2022",
        description:
            "El director médico de Inglaterra dice que el Reino Unido se encuentra en el momento más peligroso de la pandemia",
        image: "/Echo.png",
    },
    {
        title: "COVID 50",
        date: "12/12/2022",
        description:
            "El director médico de Inglaterra dice que el Reino Unido se encuentra en el momento más peligroso de la pandemia",
        image: "/Echo.png",
    },
];

const perfiles = [
    {
        avatar: "/avatar.png",
        name: "Paco",
        username: "@Pacotortilla",
    },
    {
        avatar: "/avatar.png",
        name: "Lolo",
        username: "@LOletito",
    },
];

export const RightBar = () => {
    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row bg-gray-100 gap-4 rounded-3xl px-4 py-2 items-center">
                <IoSearchOutline className="text-[#7A7C7F]" />
                <input
                    className="text-[#7A7C7F] px-2 py-1 rounded-3xl border border-gray-300 w-full bg-transparent"
                    placeholder="Buscar"
                    type="text"
                ></input>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-3xl px-4 py-2">
                <p className="text-black text-xl">Qué está pasando</p>
                {tendencias.map((tendencia, index) => {
                    return (
                        <div key={index} className="flex flex-row gap-4 p-4">
                            <div className="flex flex-col w-3/4">
                                <div className="flex flex-row items-center gap-4">
                                    <p className="text-[#7A7C7F] text-sm">
                                        {tendencia.title}
                                    </p>
                                    <p className="text-[#7A7C7F] text-sm">
                                        {tendencia.date}
                                    </p>
                                </div>

                                <p className="text-black text-sm">
                                    {tendencia.description}
                                </p>
                            </div>
                            <img
                                src={tendencia.image}
                                alt="Imagen"
                                width={40}
                                height={40}
                                className="w-1/4"
                            />
                        </div>
                    );
                })}
                <button className="text-blue-500 text-md rounded-3xl border-blue-500 max-w-fit">
                    Ver más
                </button>
            </div>
            <div className="flex flex-col bg-gray-100 rounded-3xl px-4 py-2 mb-4">
                <p className="text-black text-xl">Quién seguir</p>
                {perfiles.map((perfil, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-row justify-between items-center p-3"
                        >
                            <div className="flex flex-row items-center gap-4">
                                <img
                                    src={perfil.avatar}
                                    alt="Imagen"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="flex flex-col">
                                    <p className="text-black text-sm font-bold">
                                        {perfil.name}
                                    </p>
                                    <p className="text-[#7A7C7F] text-sm">
                                        {perfil.username}
                                    </p>
                                </div>
                            </div>

                            <button className="text-blue-500 border border-blue-500 rounded-3xl text-sm bg-white px-4 py-2">
                                Seguir
                            </button>
                        </div>
                    );
                })}
            </div>
            <p className="text-[#7A7C7F] text-sm">
                Términos de servicio Política de privacidad Política de cookies.
                Información de anuncios Más © 2021 Twitter, Inc.
            </p>
        </div>
    );
};
