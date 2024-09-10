import { createContext, useState } from "react";
import { LanguagesList } from "../lang/LanguagesList";

export const LanguageContext = createContext(null);


export const Languages = [
    { code: 'az', name: "Azerbaycan"},
    { code: 'en', name: "English" },
    { code: 'ru', name: "Русский" },
];

export const LanguageProvider = ({ children }) => {

    const [currentLanguage, setCurrentLanguage] = useState("en");

    const changeLanguage = (lang = "en") => {
        if (Languages.some(language => language.code === lang)) {
             setCurrentLanguage(lang)
        }
        else setCurrentLanguage('en')
    }

    const getLanguage = (key) => {
        return LanguagesList[currentLanguage][key]
    }
    return (
        <LanguageContext.Provider value={{ getLanguage, changeLanguage, currentLanguage, Languages }}>
            {children}
        </LanguageContext.Provider>
    )
}