import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "feO2x.com",
    description:
        "feO2x.com - Kenny Pflug's website on .NET and software development",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
