import { config } from '@utils/config';
import { createContext, Dispatch, ReactChild, SetStateAction, useEffect, useState } from 'react';
import { getInitialTheme } from './themeContext';
import StarParticles from '@components/primitives/particles/StarParticles';

type Props = {
    initialTheme?: any;
    children: ReactChild[] | ReactChild;
};

interface ContextData {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const ContextDefaultValue: ContextData = {
    theme: getInitialTheme(),
    setTheme: (value: SetStateAction<string>): void => {
        throw new Error('Function not implemented.');
    },
};

export const AppContext = createContext<ContextData>(ContextDefaultValue);

const AppContextProvider = ({ initialTheme, children }: Props) => {
    const [theme, setTheme] = useState(ContextDefaultValue.theme);

    const rawSetTheme = (theme: any): void => {
        const root = window.document.documentElement;
        const isDark = theme === "dark";

        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(theme);

        localStorage.setItem(config.localStorage.colorTheme, theme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <AppContext.Provider value={{
            theme, setTheme,
        }}>
            <StarParticles />;
            {children}
        </AppContext.Provider >
    );
};

export default AppContextProvider;;;