"use client";

import { BsSend } from "react-icons/bs";

export const FormContact = () => {
    return (
        <div className="max-w-4xl p-6 bg-[#023047] rounded-xl">
            <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-white">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-white">Apellidos</label>
                        <input
                            type="text"
                            name="apellidos"
                            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-white">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-white">Teléfono de contacto</label>
                    <input
                        type="tel"
                        name="telefono"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="text-white">Mensaje</label>
                    <textarea
                        name="mensaje"
                        rows="4"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 flex items-center space-x-2"
                    >
                        <span>Enviar</span>
                        <BsSend />
                    </button>
                </div>
            </form>
        </div>
    );
};
