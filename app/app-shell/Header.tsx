import Image from 'next/image';
import icon from '../icon.svg';
import Link from 'next/link';

export function Header() {
    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div className='max-w-7xl mx-auto'>
                <div className='py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0'>
                    <Link href='/' className="flex flex-row flex-nowrap justify-start items-center gap-2">
                        <Image src={icon} width={40} height={40} alt='home' />
                        <div>feO2x.com</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}