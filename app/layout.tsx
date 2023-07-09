import { Metadata } from 'next';
import './globals.css';
import { Header } from './app-shell/header/header';
import { ThemeProvider } from './app-shell/theme-provider';
import { Content } from './app-shell/content';
import { Footer } from './app-shell/footer';

export const metadata: Metadata = {
    title: 'feO2x.com',
    description: "Kenny Pflug's Website and Blog"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className='antialiased'>
                <ThemeProvider>
                    <div className='min-h-screen flex flex-col flex-nowrap gap-4'>
                        <Header />
                        <Content>{children}</Content>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
