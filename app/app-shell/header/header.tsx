import { HomeLink } from './home-link';
import { Menu } from './menu';

export function Header() {
    return (
        <div className="sticky bg-dark text-slate-300">
            <header className='max-w-7xl mx-auto p-4 flex flex-row justify-between'>
                <HomeLink />
                <Menu />
            </header>
        </div>
    );
}