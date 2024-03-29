import { createContext, useContext, useReducer, useEffect } from "react"
import themeReducer from "./themeReducer";

const primaryColors = {
    "color-1": "hsl(270, 70%, 46%)",
    "color-2": "hsl(110, 70%, 46%)",
    "color-3": 'hsl(240, 70%, 46%)',
    "color-4": "hsl(325, 70%, 46%)",
    "color-5": "hsl(0, 70%, 46%)",
    "color-6": "hsl(52, 70%, 46%)",
}

export const ThemeContext = createContext();


// get theme settings from local storage, or use default theme
const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || { primary: 'color-1', background: 'bg-1' }

export const ThemeProvider = ({ children }) => {
    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = (buttonClassName) => {
        dispatchTheme({ type: buttonClassName })
    }

    // save theme settings to local storage
    useEffect(() => {
        localStorage.setItem('themeSettings', JSON.stringify(themeState))
        document.documentElement.style.setProperty("--color-primary", primaryColors[themeState.primary])
    }, [themeState.primary, themeState.background])


    return <ThemeContext.Provider value={{ themeState, themeHandler }}>{children}</ThemeContext.Provider>
}


// custom hook to use theme context 
export const useThemeContext = () => {
    return useContext(ThemeContext);
}