import { 
    useEffect, 
    useState 
} from 'react';
import { ThemeContext } from './ThemeContext';  

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
