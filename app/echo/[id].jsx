import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Aquí estás usando useRouter
import { useParams } from "next/navigation"; // Esto no es necesario

export default function EchoPage() {
    const [tweet, setTweet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { query } = useRouter(); // Aquí accedes a los parámetros de la URL
    const { id } = query; // Esto te da el id

    useEffect(() => {
        const fetchTweet = async () => {
            const url =
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=5d395fdbe5b84012a0140755a9a8b96e";

            try {
                const response = await fetch(url);
                const data = await response.json();
                const selectedTweet = data.articles[Number(id)];
                setTweet({
                    image: selectedTweet.urlToImage || "/default-image.jpg",
                    description: selectedTweet.title || "Sin título",
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchTweet();
        }
    }, [id]);

    if (loading) {
        return <p className="text-black text-lg">Cargando tweet...</p>;
    }

    if (error) {
        return <p className="text-red-500 text-lg">Error: {error}</p>;
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 h-auto rounded-lg shadow-md">
                <SideBar />
            </div>

            <div className="w-full lg:w-2/4 h-auto lg:h-screen rounded-lg shadow-md flex items-center justify-center">
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Detalle del Tweet
                    </h1>
                    <img
                        src={tweet.image}
                        alt="Tweet"
                        className="w-full max-w-md rounded-lg mb-4"
                    />
                    <p className="text-gray-800 text-lg">{tweet.description}</p>
                    <button
                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => router.push("/")}
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-1/4 h-auto lg:h-screen bg-gray-100 rounded-lg shadow-md">
                <RightBar showSearchBar={true} showTendencias={true} />
            </div>
        </div>
    );
}
