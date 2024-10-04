import { Link, NavLink } from "react-router-dom";
import "./Navbar-styles.css";

const Navbar = () => {

    const navbar = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
            <NavLink to="/play-game">
                <span className="border-[3px] border-[#FF0000] px-2 rounded-lg backdrop-blur-sm">Game</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/explore">Explore</NavLink>
        </li>
        <li>
            <NavLink to="/resources">Resources</NavLink>
        </li>
        <li>
            <NavLink to="/ask-ai">Ask AI</NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Link to="/">
                            <img src="./logo.svg" alt="logo" className="w-[90px]" />
                        </Link>
                    </a>
                </div>
                <div className="navbar-end mr-2 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navbar}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;