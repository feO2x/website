export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className="max-w-7xl mx-auto p-4">
                <footer className="text-center border-t border-grey py-2">
                    <div>© 2015, {currentYear} Kenny Pflug. All rights reserved.</div>
                </footer>
            </div>
        </div>
    );
}