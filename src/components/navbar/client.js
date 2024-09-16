"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';

export const NavbarClient = ({data=[]}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  
    const toggleMenu = () => {  
        setIsMenuOpen(!isMenuOpen);  
    };  
    return (
        <nav className="fixed w-full bg-primary flex justify-center border-b-2 border-[#E0D348]">
            <div className="w-full max-w-[1200px] flex p-6 relative justify-between items-center lg:px-10">
                <Link href="/">
                    <Image
                        src={"/images/logo_large_25years_v2.png"}
                        height={34}
                        width={134}
                    />
                </Link>
                <div className="hidden md:flex grow px-8 items-center">
                    <div className="flex justify-center w-full">  
                        <div className="relative w-full max-w-[600px]">  
                            <input  
                                type="text"  
                                placeholder="Buscar producto"  
                                className="pl-10 pr-4 py-2 border rounded-md bg-white text-gray-900 focus:outline-none w-full max-w-[600px]"  
                            />  
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">  
                                <FaSearch />  
                            </span>  
                        </div>  
                    </div> 
                </div>
                <button onClick={toggleMenu} className="focus:outline-none z-20">  
                    <div className={`relative w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45' : ''}`}>  
                        <span className={`block h-1 w-full bg-[#5A5A5A] mb-1 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-90 translate-y-2' : ''}`}></span>  
                        <span className={`block h-1 w-full bg-[#5A5A5A] mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>  
                        <span className={`block h-1 w-full bg-[#5A5A5A] transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-120 -translate-y-2' : ''}`}></span>  
                    </div>  
                </button>  
            </div>
            <div className={`fixed no-scroll bg-primary inset-0 w-full h-full z-10 transition-all duration-300 transform ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                <div className="h-auto flex flex-col items-center justify-center p-5">
                    {data?.length ? 
                        data.map((item)=> (
                            <Link
                                key={item.id}
                                href={`/category/${item.id}`}
                                onClick={toggleMenu}
                                className="text-center block px-4 py-2 text-[#5A5A5A] font-bold text-2xl uppercase transition-all duration-300 hover:text-white"
                            >
                                {item.name}
                            </Link>
                        ))
                    :null}
                </div>
            </div>
        </nav>
    )
}