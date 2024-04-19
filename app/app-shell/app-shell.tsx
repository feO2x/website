import { Header } from "./header/header";

export function AppShell({ children }: ChildProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
}
