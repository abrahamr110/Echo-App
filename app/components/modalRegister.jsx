import { IoMdClose } from "react-icons/io";

import Link from "next/link";

export const ModalRegister = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md">
                <div>
                    <IoMdClose
                        color="blue"
                        onClick={onClose}
                        className="hover:cursor-pointer"
                    />
                </div>
                <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
                    Crear cuenta
                </h1>
                <form>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-6">
                        <p className="text-blue-900 text-lg">
                            Fecha de nacimiento
                        </p>
                        <p className="text-[#7A7C7F] text-sm mb-6">
                            esta información no será pública. Confirma tu propia
                            edad, incluso si esta cuenat es para una empresa,
                            una mascota u otra cosa.
                        </p>
                        <input
                            type="date"
                            placeholder="Fecha de nacimiento"
                            className="w-full text-[#7A7C7F] border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <Link href="/">
                        <button
                            type="submit"
                            className="w-full bg-[#1976D2] text-white rounded-3xl py-2 font-bold hover:bg-blue-300 transition"
                        >
                            Registrarse
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};
