export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-center border-t border-grey p-4 pin-b">
            <p>© 2015, {currentYear} Kenny Pflug. All rights reserved.</p>
        </footer>
    );
}