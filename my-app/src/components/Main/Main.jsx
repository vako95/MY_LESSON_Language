import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import "./Main.css"

const Main = () => {
const {getLanguage} = useContext(LanguageContext);

return(
    <div className="app">

       <h1>{getLanguage('navbar')}</h1>
       <h1>{getLanguage('menu')}</h1>
    </div>
)
}
export default Main;