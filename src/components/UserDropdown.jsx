"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const UserDropdown = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNavigate = (path) => {
        router.push(path);
        setIsOpen(false);
    };

    const handleLogout = () => {
        authClient.signOut();
        setIsOpen(false);
        router.replace("/");
    };

    return (
        <div className="relative" ref={dropdownRef}>

            {/* Avatar trigger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 focus:outline-none"
            >
                {user?.image ? (
                    <Image
                        src={user?.image}
                        alt={user?.name}
                        width={100}
                        height={100}
                        className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                )}
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">

                    {/* User info header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                    </div>

                    {/* Menu items */}
                    <ul className="py-1">
                        <li>
                            <button
                                onClick={() => handleNavigate("/explore-cars")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                            >
                                 Explore Cars
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigate("/add-cars")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                            >
                                 Add Cars
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigate("/my-bookings")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                            >
                                 My Bookings
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleNavigate("/my-cars")}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                            >
                                 My Added Cars
                            </button>
                        </li>
                    </ul>

                    {/* Logout */}
                    <div className="border-t border-gray-100 py-1">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition"
                        >
                             Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;