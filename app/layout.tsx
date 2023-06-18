import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'feO2x.com',
    description: "Kenny Pflug's Website and Blog"
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
