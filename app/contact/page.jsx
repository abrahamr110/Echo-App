import { FormContact } from "../components/formContact";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-[#023047] text-5xl font-bold mb-10">
                Contacta con nosotros!!
            </h1>
            <div className="flex flex-row justify-center">
                <FormContact />

                <Link href="/" className="w-2/4 max-w-full -mx-32">
                    <img
                        src="/Echo.png"
                        className="w-full"
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                </Link>
            </div>
        </div>
    );
}
