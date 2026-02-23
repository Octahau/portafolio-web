import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata = {
    title: "Octavio | Software Engineer",
    description: "Portafolio de Octavio — Desarrollador Web Frontend",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`scroll-smooth ${inter.variable}`}>
            <body className="antialiased" suppressHydrationWarning>{children}</body>
        </html>
    );
}
