"use client";

import { useState } from "react";
import { ModalRegister } from "./modalRegister";
import { ModalIniciarSesion } from "./modalIniciarSesion";

export const FormSign = () => {
    const [modalRegister, setModalRegister] = useState(false);
    const [modalIniciarSesion, setModalIniciarSesion] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-900 mb-4">
                    Únete hoy
                </h1>

                <button className="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-600 rounded-full py-2 mb-4 hover:bg-gray-100">
                    <img
                        src="google.svg"
                        alt="Google"
                        className="h-5 w-5 mr-2"
                    />
                    Registrarse con Google
                </button>

                <button className="flex items-center justify-center w-full bg-black text-white rounded-full py-2 mb-4 hover:bg-gray-800">
                    <img src="apple.svg" alt="Apple" className="h-5 w-5 mr-2" />
                    Registrarse con Apple
                </button>

                <div className="relative my-4">
                    <hr className="border-gray-300" />
                </div>

                <button
                    className="w-full bg-blue-500 text-white rounded-full py-2 font-bold hover:bg-blue-600"
                    onClick={() => {
                        setModalRegister(true);
                    }}
                >
                    Crear cuenta
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                    Al registrarte aceptas los{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Términos de servicio
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Política de privacidad
                    </a>
                    , incluida la política de Uso de Cookies.
                </p>

                <hr className="my-4 border-gray-300" />

                <p className="text-center text-blue-900 font-semibold mb-2">
                    ¿Ya tienes una cuenta?
                </p>
                <button
                    className="w-full border border-blue-500 text-blue-500 rounded-full py-2 hover:bg-blue-50"
                    onClick={() => {
                        setModalIniciarSesion(true);
                    }}
                >
                    Iniciar sesión
                </button>
            </div>

            {modalRegister && (
                <ModalRegister
                    onClose={() => {
                        setModalRegister(false);
                    }}
                />
            )}

            {modalIniciarSesion && (
                <ModalIniciarSesion
                    onClose={() => {
                        setModalIniciarSesion(false);
                    }}
                />
            )}
        </div>
    );
};
