import { SideBar } from "./components/sideBar";
import { RightBar } from "./components/rightBar";

export default function Home() {
    return (
        <div className="flex flex-row w-screen h-screen">
            {/* Barra lateral izquierda */}
            <div className="w-1/4 h-full">
                <SideBar />
            </div>

            {/* Componente Central */}
            <div className="w-2/4 h-full">
                <p className="text-gray-700 text-xl">
                    Componente Central (Más espacio)
                </p>
            </div>

            {/* Barra lateral derecha */}
            <div className="w-1/4 h-full">
                <RightBar />
            </div>
        </div>
    );
}
