import { FormContact } from "../components/formContact";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-[#023047] text-5xl font-bold mb-10">
                Contacta con nosotros!!
            </h1>
            <div className="flex flex-row justify-center">
                <FormContact />
                <img
                    src="/Echo.png"
                    className="w-2/4 max-w-full -mx-32"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
}
