"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const Content = () => {
    const [tweets, setTweets] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                const formattedTweets = data.articles.map((article) => ({
                    image: article.urlToImage || "/default-image.jpg",
                    description: article.title || "Sin título",
                }));
                setTweets(formattedTweets);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

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

        fetchNews();
        fetchUsers();
    }, []);

    if (loading) {
        return <p className="text-black text-lg">Cargando noticias...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }

    return (
        <div className="flex flex-col w-full h-full p-4">
            <div className="overflow-y-auto max-h-fullsm:max-h-full md:max-h-full">
                {tweets.map((tweet, index) => {
                    const user = users[index % users.length];
                    return (
                        <div key={index} className="flex flex-row mt-4 w-full">
                            <div>
                                <Image
                                    src={
                                        user?.picture?.thumbnail ||
                                        "/default-image.jpg"
                                    }
                                    alt="Imagen"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col ml-2 w-full">
                                <div className="flex flex-row items-center gap-1">
                                    <p className="text-black text-sm">
                                        {user?.name?.first} {user?.name?.last}
                                    </p>
                                    <p className="text-[#7A7C7F] text-xs">
                                        {user?.login?.username}
                                    </p>
                                </div>
                                <p className="text-sm text-black mt-1">
                                    {tweet.description}
                                </p>
                                <div className="mt-1 w-full h-auto">
                                    <Image
                                        src={tweet.image}
                                        alt="Imagen"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>
                                <button className="text-blue-500 max-w-fit text-sm mt-1">
                                    Mostrar hilo
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
