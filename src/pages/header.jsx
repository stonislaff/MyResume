import './scss/header.scss';
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="Header">
            <header>
                <nav className="Navigation">
                    <div className="NavChild"><NavLink to='/projects'><span>Projects</span></NavLink></div>
                    <div className="NavChild"><NavLink to='/resume'><span>Resume</span></NavLink></div>
                    <div className="NavChild"><NavLink to='/services'><span>Services</span></NavLink></div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
