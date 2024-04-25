import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import styles from "./app-shell.module.scss";

export function AppShell({ children }: ChildProps) {
    return (
        <>
            <Header />
            <main>
                <div className={styles.container}>
                    <article className={styles["main-content"]}>
                        {children}
                    </article>
                    <Sidebar />
                </div>
            </main>
            <footer>Footer</footer>
        </>
    );
}
