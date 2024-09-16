"use server";
import { ProductsGrid } from "@/components"
import { ENDPOINTS } from "@/const/endpoints";
import { handleRequest } from "@/utils";

export const TopSellersServer = async () => {
    const { data } = await handleRequest({
        url: ENDPOINTS.SEARCH,
        params: {
            category: "MCO1051",
            sort: 'relevancy',
            limit: 12
        }
    });
    return (
        <div className="flex-flex-col">
            <h2 className="text-lg font-semibold">
                Productos mas populares
            </h2>
            <br/>
            <ProductsGrid data={data?.results}/>
        </div>
    )
}