import Image from 'next/image';
import Link from 'next/link';
import kennyPhoto from './kenny-pflug.jpg';

export function Navbar() {
    return (
        <div className="flex flex-col bg-teal-600">
            <div className="flex flex-col items-center mb-10">
                <Image
                    src={kennyPhoto}
                    alt="Photo of Kenny Pflug"
                />
                <p>Hey, I&apos;m Kenny Pflug, a.k.a. feO2x.</p>
                <p>
                    I am a software architect at <a href="https://www.thinktecture.com">Thinktecture</a>.
                </p>
            </div>
            <nav className="flex flex-col items-center space-y-4">
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/talks">Talks & Conferences</Link>
                <a href="https://twitter.com/feO2x" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com/feO2x" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://youtube.com/c/kennypflug" target="_blank" rel="noopener noreferrer">YouTube</a>
            </nav>
        </div>
    );
}