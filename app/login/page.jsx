import { Footer } from "../components/footer";
import { FormSign } from "../components/formSign";
import Image from "next/image";

export default function Login() {
    return (
        <div className="bg-gradient-to-b from-[#1976D2] to-[#023047] h-screen w-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="md:w-1/2 md:h-1/2">
                        <Image
                            src="/Echo.png"
                            alt="Logo"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <FormSign />
                </div>
            </div>

            <footer className="flex flex-row justify-center gap-4 py-4 px-2 w-full shadow-md">
                <Footer />
            </footer>
        </div>
    );
}
