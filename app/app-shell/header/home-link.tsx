import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import icon from "../../icon.svg";
import homeText from "./home-text.svg";
import styles from "./home-link.module.scss";

export function HomeLink() {
    return (
        <Link href="/" aria-label="Home Link" className={styles["home-link"]}>
            <ExportedImage src={icon} width={40} height={40} alt="Home" />
            <ExportedImage src={homeText} height={32} alt="Home" />
        </Link>
    );
}
