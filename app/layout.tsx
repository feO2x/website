import { Metadata } from 'next';
import './globals.css';
import { Navbar } from './app-shell/navbar/Navbar';
import { Footer } from './app-shell/Footer';
import { Header } from './app-shell/Header';

export const metadata: Metadata = {
    title: 'feO2.com',
    description: "Kenny Pflug's Website and Blog"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800">
                <Header />
                {children}
                <Navbar />
            </body>
        </html>
    );
}
