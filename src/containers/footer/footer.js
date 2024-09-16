import { Logo } from "@/components";
import Image from "next/image";
import Link from "next/link"

const footerLinks = [  
    {  
        category: "company",  
        items: [  
            { name: "Acerca de nosotros" },  
            {  
                name: "Trabaja con nosotros",  
            },  
            { name: "Contáctanos" },  
        ],  
    },  
    {  
        category: "legal",  
        items: [  
            { name: "Términos y condiciones" },  
            { name: "Privacidad" },  
        ],  
    },  
];  

export const Footer = () => {
    return (
        <footer className="w-full bg-primary flex justify-center border-t-2 border-[#E0D348]">
            <div className="w-full p-6 flex flex-col md:p-10 lg:py-14 lg:px-10 md:flex-row md:justify-between max-w-[1200px]">
                <Logo/>
                <div className="border-b-2 border-[#E0D348] flex flex-col pb-5 mb-5 max-w-80 text-black">
                    <p className="text-center md:text-start">
                        Copyright © 1998-2024 Eco Developer.
                    </p>
                    <br/>
                    <p className="text-center md:text-start">
                        CNPJ No. 03.007.331/0001-41 / Av. Naciones Unidas, No. 3.003, Caracas, Venezuela/SP - Código Postal 1090 - una empresa del grupo Eco Developer.
                    </p>
                </div>
                <div className="w-full border-b-2 border-[#E0D348] flex justify-between pb-5 mb-5 max-w-[350px]">
                    {footerLinks.map(({ category, items }) => (
                        <div key={category} className="mt-10 md:mt-0">
                            <h3 className="text-sm font-semibold text-black text-center md:text-start">
                                {category.toUpperCase()}
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                                {items.map((item) => (
                                <li key={item.name} className="text-center md:text-start">
                                    <Link
                                        href={"/"}
                                        className="text-sm text-black"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}