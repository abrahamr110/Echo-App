import { Footer } from "../components/footer";
import { Form } from "../components/form";
import Image from "next/image";

export default function Login() {
    return (
        <div className="bg-gradient-to-b from-[#1976D2] to-[#023047] h-full w-full">
            <div className="flex flex-row flex-grow justify-center items-center">
                <div>
                    <Image
                        src="/Echo.png"
                        alt="Logo"
                        width={1000}
                        height={1000}
                    />
                </div>

                <Form />
            </div>
            <div className="flex flex-row justify-center gap-4">
                <Footer />
            </div>
        </div>
    );
}
