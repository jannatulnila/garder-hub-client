import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const [theme, setTheme] = useState("light");

    const handleThemeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }

    const navLinks = (
        <>
            <li><NavLink className={({ isActive }) =>
                isActive
                    ? "text-green-500 font-semibold"
                    : "text-gray-600 hover:text-green-500"
            } to="/">Home</NavLink></li>
            <li><NavLink
                className={({ isActive }) =>
                    isActive
                        ? "text-green-500 font-semibold"
                        : "text-gray-600 hover:text-green-500"
                }
                to="/explore-gardeners">Explore Gardeners</NavLink></li>
            <li><NavLink
                className={({ isActive }) =>
                    isActive
                        ? "text-green-500 font-semibold"
                        : "text-gray-600 hover:text-green-500"
                }
                to="/browse-tips">Browse Tips</NavLink></li>
            {user && (
                <>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-500 font-semibold"
                                : "text-gray-600 hover:text-green-500"
                        }
                        to="/share-tip">Share a Garden Tip</NavLink></li>
                    <li><NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-500 font-semibold"
                                : "text-gray-600 hover:text-green-500"
                        }
                        to="/my-tips">My Tips</NavLink></li>
                </>
            )}
        </>
    );
    return (
        <div className="navbar bg-base-100  shadow-md">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    🌿 GardenHub
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                <button className="btn btn-ghost" onClick={handleThemeToggle}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>

                {!user ? (
                    <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                ) : (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="w-10 rounded-full" src={user.photoURL} alt="User" />
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="text-center font-bold">{user.displayName}</li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile menu */}
            <div className="lg:hidden dropdown dropdown-end ml-2">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;