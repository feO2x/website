import { MenuButton } from "./menu-button";
import { ThemeToggle } from "./theme-toggle";

export function Menu() {
    return (
        <div className="flex flex-row flex-nowrap items-center gap-6">
            <ThemeToggle />
            <MenuButton />
        </div>
    );
}