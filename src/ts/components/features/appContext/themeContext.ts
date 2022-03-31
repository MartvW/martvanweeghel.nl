import { config } from '@utils/config';

export const getInitialTheme = (_?: any) => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem(config.localStorage.colorTheme);
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        if (userMedia.matches) {
            return "dark";
        }
    }

    return "dark";
};