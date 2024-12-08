import "./globals.css";

export const metadata = {
    title: "Echo",
    description: "Generado por Abraham Rodríguez",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="h-screen w-screen">
            <body className="h-full w-full">{children}</body>
        </html>
    );
}
