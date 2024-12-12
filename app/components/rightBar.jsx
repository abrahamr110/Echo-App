"use client";

import { useEffect, useState } from "react";

export const RightBar = ({ showTendencias = true, showSearchBar = true }) => {
    const [tendencias, setTendencias] = useState([]);
    const [perfiles, setPerfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTendencias = async () => {
            const url =
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d395fdbe5b84012a0140755a9a8b96e";

            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("No se pudieron cargar las tendencias");
                }
                const data = await response.json();
                const formattedTendencias = data.articles.map((article) => ({
                    title: article.title,
                    date: article.publishedAt.split("T")[0],
                    description: article.description,
                    image: article.urlToImage || "/default-image.jpg",
                }));
                setTendencias(formattedTendencias);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchPerfiles = async () => {
            const url = "https://randomuser.me/api/?results=20";
            try {
                const response = await fetch(url);
                const data = await response.json();
                const formattedPerfiles = data.results.map((user) => ({
                    avatar: user.picture.thumbnail,
                    name: user.name.first + " " + user.name.last,
                    username: user.login.username,
                }));
                setPerfiles(formattedPerfiles);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchTendencias();
        fetchPerfiles();
    }, []);

    if (loading) {
        return <p className="text-black text-lg">Cargando...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }

    return (
        <div className="flex flex-col p-4">
            {showSearchBar && (
                <div className="flex flex-row bg-gray-100 gap-4 rounded-3xl py-2 items-center">
                    <input
                        className="text-[#7A7C7F] px-2 py-1 rounded-3xl border border-gray-300 w-full bg-transparent focus:border-blue-500"
                        placeholder="Buscar"
                        type="text"
                    ></input>
                </div>
            )}

            {showTendencias && (
                <div className="flex flex-col bg-gray-100 rounded-3xl py-2 mt-4 overflow-y-auto max-h-96">
                    <p className="text-black text-xl">Qué está pasando</p>
                    {tendencias.map((tendencia, index) => (
                        <div
                            key={index}
                            className="flex flex-row gap-4 mb-2 mt-2"
                        >
                            <div className="flex flex-col w-3/4">
                                <div className="flex flex-row gap-4">
                                    <p className="text-black  text-sm">
                                        {tendencia.title}
                                    </p>
                                    <p className="text-black  text-sm  whitespace-nowrap">
                                        {tendencia.date}
                                    </p>
                                </div>

                                <p className="text-[#7A7C7F] text-sm mt-2">
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
                    ))}
                </div>
            )}

            <div className="flex flex-col bg-gray-100 rounded-3xl py-2 mb-4 overflow-y-auto max-h-96">
                <p className="text-black text-xl">Quién seguir</p>
                {perfiles.map((perfil, index) => (
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
                ))}
            </div>

            <p className="text-[#7A7C7F] text-sm">
                Términos de servicio Política de privacidad Política de cookies.
                Información de anuncios Más © 2021 Twitter, Inc.
            </p>
        </div>
    );
};
