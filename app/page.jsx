import { SideBar } from "./components/sideBar";
import { RightBar } from "./components/rightBar";

export default function Home() {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/4 h-auto  rounded-lg shadow-md">
                <SideBar />
            </div>

            <div className="w-full lg:w-2/4 h-auto lg:h-screen  rounded-lg shadow-md flex items-center justify-center">
                <p className="text-gray-700 text-xl text-center">
                    Componente Central (Más espacio)
                </p>
            </div>

            <div className="w-full lg:w-1/4 h-auto lg:h-screen bg-gray-100  rounded-lg shadow-md">
                <RightBar />
            </div>
        </div>
    );
}
