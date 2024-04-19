import { HomeLink } from "./home-link";
import styles from "./header.module.scss";
import { Menu } from "./menu";

export function Header() {
    return (
        <header>
            <div className={styles.container}>
                <HomeLink />
                <Menu />
            </div>
        </header>
    );
}
