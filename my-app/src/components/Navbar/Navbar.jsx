import Menu from "./Menu/Menu"
import Logo from "../Logo/Logo"
import imgLogo from  "../assets/img/1.jpg"
import "./Navbar.css"

const Navbar = () => {


    return(
        <div className="navbar">
            <Menu 
          
            />
            <Logo 
            logo={imgLogo}
            />
            
        </div>
    )
}
export default Navbar