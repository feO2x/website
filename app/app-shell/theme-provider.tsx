'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeId = 'light' | 'dark';

export interface Theme {
    themeId?: ThemeId;
    toggleTheme(): void;
}

const localStorageItemId = 'feO2x.theme';
export const lightThemeId = 'light';
export const darkThemeId = 'dark';

const ThemeContext = createContext<Theme | null>(null);

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);
    if (!theme)
        throw new Error('ThemeProvider is not set up in the component tree');
    return theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<ThemeId | undefined>();

    useEffect(() => {

        let initialTheme: ThemeId = lightThemeId;
        if (typeof window !== 'undefined' && window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: light)').matches)
                initialTheme = lightThemeId;
            else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
                initialTheme = darkThemeId;
        }
        
        if (typeof localStorage !== 'undefined') {
            const themeFromLocalStorage = localStorage.getItem(localStorageItemId);
            if (themeFromLocalStorage === lightThemeId)
                initialTheme = lightThemeId;
            else if (themeFromLocalStorage === darkThemeId)
                initialTheme = darkThemeId;
        }

        setTheme(initialTheme);

    }, []);

    const toggleTheme = () => {
        const newValue: ThemeId = theme === 'light' ? 'dark' : 'light';
        setTheme(newValue);
        if (typeof localStorage !== 'undefined')
            localStorage.setItem(localStorageItemId, newValue);
    };

    return (
        <ThemeContext.Provider value={{ themeId: theme, toggleTheme }}>
            <div className={theme || ''}>
                <div className="text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800">
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
}