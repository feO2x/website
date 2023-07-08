import { Metadata } from 'next';
import './globals.css';
import { Navbar } from './app-shell/navbar/Navbar';
import { Header } from './app-shell/header/header';
import { ThemeProvider } from './app-shell/theme-provider';

export const metadata: Metadata = {
    title: 'feO2.com',
    description: "Kenny Pflug's Website and Blog"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <ThemeProvider>
                    <Header />
                    {children}
                    <Navbar />
                </ThemeProvider>
            </body>
        </html>
    );
}
