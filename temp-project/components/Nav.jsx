"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-700 w-full ">
            <div className=" w-full  bg-gray-900 border-gray-700">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
                            <p className="text-base md:text-2xl">
                                Watch
                                <span className="text-red-600">O</span>
                            </p>
                        </div>
                    </Link>

                    <div
                        className=" w-full  block md:w-auto"
                        id="navbar-multi-level"
                    >
                        <ul className="min-w-[200px] sm:min-w-[300px] flex font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse  flex-row md:mt-0 md:border-0 md: bg-gray-800 md:bg-gray-900 border-gray-700">
                            <li className="flex justify-start items-center py-7 relative">
                                <input
                                    className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
                                    type="text"
                                    placeholder="Search"
                                />
                                <svg
                                    className="absolute right-3 z-10 cursor-pointer"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                                        stroke="#4B5563"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21 21L15 15"
                                        stroke="#4B5563"
                                        strokeWidth="1.66667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </li>

                            <li
                                onClick={() => {
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                            >
                                <button
                                    id="dropdownNavbarLink"
                                    data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3  md:border-0  md:p-0 md:w-auto text-white md:hover:text-blue-500 focus:text-white hover:bg-gray-700 md:hover:bg-transparent"
                                >
                                    Categories&nbsp;
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                {isDropdownOpen && (
                                    <div
                                        id="dropdownNavbar"
                                        className="z-10 absolute font-normal  divide-y  rounded-lg shadow w-44 bg-gray-700 divide-gray-600"
                                    >
                                        <ul
                                            className="py-2 text-sm   "
                                            aria-labelledby="dropdownLargeButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2  bg-gray-600  text-white"
                                                >
                                                    Movies
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 bg-gray-600 text-white"
                                                >
                                                    Web Series
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 bg-gray-600 text-white"
                                                >
                                                    Dramas{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 bg-gray-600 text-white"
                                                >
                                                    Latest Release
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 bg-gray-600 text-white"
                                                >
                                                    Most Watched
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 bg-gray-600 text-white"
                                                >
                                                    Favourites
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            <li className="md:min-w-[75px] mx-auto text-white ">
                                <Link
                                    href="#"
                                    className="block py-2 px-3 text-white rounded md:border-0   md:p-0   hover:bg-gray-700   md:hover:bg-transparent"
                                >
                                    Setting
                                </Link>
                            </li>
                            <li className="md:min-w-[75px] mx-auto text-white ">
                                <Link
                                    href="/login"
                                    className="block py-2 px-3 text-white rounded md:border-0   md:p-0   hover:bg-gray-700   md:hover:bg-transparent"
                                >
                                    Log In
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
