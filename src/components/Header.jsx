import studioLogo from "../assets/studioLogo.svg";
import { Link } from "react-router-dom";
export default function Header()
{
    return(
        <header className = "header">
            <div className="logoContainer">
                <Link to = "/">
                    <img src=
                    {studioLogo} alt="Studio logo" className="logo"/>
                </Link>
            </div>
            <div className = "nav">
                <Link to="/projects">פרויקטים </Link>
                <span>|</span> 
                <Link to="/about">אודות </Link>
                <span>|</span> 
                <Link to = "/contact">צור קשר </Link>
            </div>
            <div id = "tele">
                052-652-4114
            </div>
        </header>
    )
}