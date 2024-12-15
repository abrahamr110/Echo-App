"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // Asegúrate de tener esta importación

const actions = [
    { name: "Publicaciones" },
    { name: "Echos" },
    { name: "Artículos" },
    { name: "Me gusta" },
    { name: "Media" },
];

export const ContentProfile = () => {
    const [tweet, setTweet] = useState(null);
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (loading) {
        return <p className="text-black text-lg">Cargando noticias...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }

    if (!perfil || !tweet) {
        return <p>Esperando datos...</p>;
    }

    const fetchNews = async () => {
        const url =
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d395fdbe5b84012a0140755a9a8b96e";

        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch news");
            }
            const data = await response.json();

            const formattedTweet = {
                image: data.articles[0]?.urlToImage || "/default-image.jpg",
                description: data.articles[0]?.title || "Sin título",
            };
            setTweet(formattedTweet);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchPerfil = async () => {
        const url = "https://randomuser.me/api/?results=1"; // Solicitar solo un perfil
        try {
            const response = await fetch(url);
            const data = await response.json();

            const user = data.results[0];
            setPerfil({
                avatar: user.picture.thumbnail,
                name: `${user.name.first} ${user.name.last}`,
                username: user.login.username,
            });
        } catch (err) {
            setError(err.message);
        }
    };
    useEffect(() => {
        fetchNews();
        fetchPerfil();
    }, []);

    return (
        <div className="flex flex-col w-full h-full p-4">
            <div className="flex flex-col ">
                <Image
                    src="/avatar.png"
                    alt="Imagen de perfil"
                    width={150}
                    height={150}
                    className="rounded-full"
                />
                <div className="flex flex-row items-center mt-4 gap-2">
                    <p className="text-black text-xl">
                        Abraham Rodriguez Martinez
                    </p>
                    <p className="text-[#7A7C7F] text-sm">
                        @abrahamrodriguez00
                    </p>
                </div>

                <p className="text-[#7A7C7F] text-xs">Se unió en Mayo 2022</p>
                <div className="flex flex-row items-center">
                    <p className="text-black text-xs">55 following</p>
                    <p className="text-black text-xs ml-2">2 followers</p>
                    <button className="text-blue-500 border border-blue-500 rounded-3xl text-sm bg-white px-4 py-2 ml-auto">
                        Editar perfil
                    </button>
                </div>
            </div>
            <div className="flex flex-row gap-4 mt-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`text-md hover:cursor-pointer ${
                            action.name === "Publicaciones"
                                ? "text-blue-500"
                                : "text-black"
                        }`}
                    >
                        {action.name}
                    </button>
                ))}
            </div>

            <div className="flex flex-row mt-4 w-full">
                <div>
                    <Image
                        src={perfil.avatar}
                        alt="Imagen de perfil"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </div>
                <div className="flex flex-col ml-2 w-full">
                    <div className="flex flex-row items-center gap-1">
                        <p className="text-black text-sm">{perfil.name}</p>
                        <p className="text-[#7A7C7F] text-xs">
                            @{perfil.username}
                        </p>
                    </div>
                    <p className="text-sm text-black mt-1">
                        {tweet.description}
                    </p>
                    <div className="mt-1 w-full h-auto">
                        <Image
                            src={tweet.image}
                            alt="Imagen"
                            width={600}
                            height={300}
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                    <button className="text-blue-500 max-w-fit text-sm mt-1">
                        Mostrar hilo
                    </button>
                </div>
            </div>
        </div>
    );
};
