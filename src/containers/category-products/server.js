"use server"

import { ProductsGrid } from "@/components";
import { ENDPOINTS } from "@/const/endpoints";
import { handleRequest } from "@/utils";

export const CategoryProductsServer = async ({slug}) => {
    
    const resProducts = await handleRequest({
        url: ENDPOINTS.SEARCH,
        params: {
            category: slug,
            sort: 'relevancy',
            limit: 50,
        }
    });
    const resCategory = await handleRequest({
        url: `${ENDPOINTS.CATEGORIES}${slug}`,
    });
    return (
        <div className="flex flex-col w-full">
             <h2 className="text-lg font-semibold">
                {resCategory.data?.name}
            </h2>
            <br/>
            <ProductsGrid data={resProducts.data?.results}/>
        </div>
    )
}