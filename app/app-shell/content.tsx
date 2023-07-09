export function Content({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-grow">
            <div className="max-w-prose mx-auto px-2">
                {children}
            </div>
        </div>
    );
}