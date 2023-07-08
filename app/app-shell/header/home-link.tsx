import icon from '../../icon.svg';
import homeText from './home-text.svg';
import Link from "next/link";
import Image from 'next/image';

export function HomeLink() {
    return (
        <Link href='/' className="flex flex-row flex-nowrap justify-start items-center gap-2">
            <Image src={icon} width={40} height={40} alt='home' />
            <Image src={homeText} height={32} alt='home' />
        </Link>
    );
}