"use client";

import Link from "next/link";

export default function Error() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-[#023047]">404</h1>
                <p className="text-2xl md:text-3xl font-semibold mt-6 text-gray-800">
                    Página no encontrada
                </p>
                <p className="text-gray-600 mt-4">
                    Oops! La página que buscas no existe. Podría haber sido
                    movido o eliminado.
                </p>
                <Link href="/">
                    <button className="text-white bg-[#FFC107] hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium mt-6 inline-block">
                        Volver al inicio
                    </button>
                </Link>
            </div>
        </div>
    );
}
