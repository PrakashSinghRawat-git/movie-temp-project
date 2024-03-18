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
                            <li className="flex relative  gap-5">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4  text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block  w-full p-2 ps-12 text-sm  border   rounded-lg     bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search..."
                                />
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
