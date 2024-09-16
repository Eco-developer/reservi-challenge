import { Suspense } from "react"
import { CategoryProductsServer } from "./server"

export const CategoryProducts = ({slug}) => {
    return (
        <Suspense fallback={null}>
            <CategoryProductsServer slug={slug}/>
        </Suspense>
    )
}