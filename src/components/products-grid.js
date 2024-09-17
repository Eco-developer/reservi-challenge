import { ProductCard } from "./product-card"

export const ProductsGrid = async ({data=[]}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.length ? 
                data.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))
            : null}
        </div>
    )
}