"use client";

import { useState, useEffect } from "react";

const actions = [
    { name: "Para ti" },
    { name: "Tendencias" },
    { name: "Deportes" },
    { name: "Noticias" },
    { name: "Entretenimiento" },
];

export const ContentSearch = () => {
    const [tendencias, setTendencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            }));
            setTendencias(formattedTendencias);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTendencias();
    }, []);

    if (loading) {
        return <p className="text-black text-lg">Cargando...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }
    return (
        <div className="flex flex-col h-full w-full p-4">
            <div className="flex flex-row  gap-4 rounded-3xl py-2 items-center">
                <input
                    className="text-[#7A7C7F] px-2 py-1 rounded-3xl border border-gray-300 w-full bg-transparent focus:border-blue-500"
                    placeholder="Buscar"
                    type="text"
                ></input>
            </div>
            <div className="flex flex-row gap-4 mt-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        className={`text-md hover:cursor-pointer ${
                            action.name === "Tendencias"
                                ? "text-blue-500"
                                : "text-black"
                        }`}
                    >
                        {action.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-col py-2 overflow-y-auto max-h-full">
                {tendencias.map((tendencia, index) => (
                    <div key={index} className="flex flex-row gap-4 mb-2 mt-2">
                        <div className="flex flex-col w-3/4">
                            <div className="flex flex-row gap-4">
                                <p className="text-black text-sm font-extrabold">
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
                    </div>
                ))}
            </div>
        </div>
    );
};
