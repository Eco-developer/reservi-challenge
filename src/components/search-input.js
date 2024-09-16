import { FaSearch } from "react-icons/fa"

export const SearchInput = () => {
    return (
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
    )
}