import { HomeLink } from './home-link';
import { Menu } from './menu';
import { ThemeToggle } from './theme-toggle';

export function Header() {
    return (
        <div className="sticky bg-dark text-slate-300">
            <div className='max-w-7xl mx-auto'>
                <div className='py-4 mx-4 flex flex-row justify-between'>
                    <HomeLink />
                    <Menu />
                </div>
            </div>
        </div>
    );
}