import { FaBars } from "react-icons/fa6";
import styles from "./menu.module.scss";

export function Menu() {
    return (
        <button id="menu-toggle" className={styles["menu-toggle"]}>
            <FaBars />
        </button>
    );
}
