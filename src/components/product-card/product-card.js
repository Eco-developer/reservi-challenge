import Image from "next/image";
import Link from "next/link";
import { currencyFormat } from "@/utils";

export const ProductCard = ({product}) => {
    const {  
        title,  
        thumbnail,  
        price,  
        available_quantity,  
        sale_price,  
        seller,  
        shipping,
        id, 
      } = product;  
    
      const finalPrice = sale_price?.amount || price;  
      
      return (  
        <Link
          href={`/product/${id}`}  
          className="flex"
        >
          <div className="bg-white cursor-pointer border border-[#D9D9D9] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 grow" >  
            <div className="w-full flex justify-center p-5">
              <Image   
                src={thumbnail}   
                alt={title}   
                height={140}
                width={266}
                loading="lazy"
                className="object-contain h-[140px]"  
              />  
            </div>
            <div className="p-4">  
              <h2 className="text-lg font-bold mb-2">{title}</h2>  
              <p className="text-xl text-green-600 mb-2">  
                {currencyFormat(finalPrice)}
                <br/>
                {sale_price?.amount ? (  
                  <span className="text-sm line-through text-gray-500">  
                    {currencyFormat(price)}  
                  </span>  
                )
                : null}  
              </p>  
              <p className="text-gray-600 mb-2">  
                Cantidad disponible: {available_quantity}  
              </p>  
              <p className="text-gray-600 mb-2 break-words">  
                Vendedor: 
                <br/>
                {seller.nickname}  
              </p>  
              {shipping.free_shipping ? (  
                <span className="text-green-600 font-bold">Envío Gratis</span>  
              ) : null}  
            </div>  
          </div>  
        </Link>
    );  
}