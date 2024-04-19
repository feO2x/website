import type { Metadata } from "next";
import "./globals.scss";
import { AppShell } from "./app-shell/app-shell";

export const metadata: Metadata = {
    title: "feO2x.com",
    description:
        "feO2x.com - Kenny Pflug's website on .NET and software development",
};

export default function RootLayout({ children }: ChildProps) {
    return (
        <html lang="en">
            <body>
                <AppShell>{children}</AppShell>
            </body>
        </html>
    );
}
