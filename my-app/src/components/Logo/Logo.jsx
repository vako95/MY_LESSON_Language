import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

import "./Logo.css"

const Logo = ({ logo }) => {
    const { getLanguage, changeLanguage, currentLanguage, Languages } = useContext(LanguageContext)
    return (
        <div className="logo">
            {Languages.map((lang) => (
                <button
                    onClick={() => changeLanguage(lang.code)}
                    disabled={currentLanguage === lang.code}
                    > {lang.code}
                </button> 
            ))}

<h1>{getLanguage('navbar')}</h1>
            <img width={150} src={logo} alt="" />
         
        </div>
    )
}
export default Logo;