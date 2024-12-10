import Image from "next/image";

const tweets = [
    {
        avatar: "/avatar.png",
        name: "Abraham",
        username: "@abrahamcastillo",
        image: "/Echo.png",
        description:
            "El director médico de Inglaterra dice que el Reino Unido se encuentra en el momento más peligroso de la pandemia",
    },
    {
        avatar: "/avatar.png",
        name: "Abraham",
        username: "@abrahamcastillo",
        image: "/Echo.png",
        description:
            "El director médico de Inglaterra dice que el Reino Unido se encuentra en el momento más peligroso de la pandemia",
    },
];

export const Content = () => {
    return (
        <div className="flex flex-col w-full h-full p-4">
            <p>Inicio</p>
            <div className="flex flex-row">
                <Image
                    src="/avatar.png"
                    alt="Imagen"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <p className="text-black text-xl">¿Qué está pasando?</p>
                <button className="text-blue-500 border border-blue-500 rounded-3xl text-sm bg-white px-4 py-2">
                    Echo
                </button>
            </div>
            {tweets.map((tweet, index) => {
                return (
                    <div key={index} className="flex flex-row">
                        <Image
                            src={tweet.avatar}
                            alt="Imagen"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center gap-4">
                                <p className="text-[#7A7C7F] text-sm">
                                    {tweet.name}
                                </p>
                                <p className="text-[#7A7C7F] text-sm">
                                    {tweet.username}
                                </p>
                            </div>
                            <p className="text-sm text-black">
                                {tweet.description}
                            </p>
                            <Image
                                src={tweet.image}
                                alt="Imagen"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <button className="text-blue-500 bg-black">
                                Mostrar hilo
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
