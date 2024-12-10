import { IoMdClose } from "react-icons/io";

export const ModalIniciarSesion = ({ onClose }) => {
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
                    Iniciar sesión
                </h1>
                <form>
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

                    <button
                        type="submit"
                        className="w-full bg-[#1976D2] text-white rounded-3xl py-2 font-bold hover:bg-blue-300 transition"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};
