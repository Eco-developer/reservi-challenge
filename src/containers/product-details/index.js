import { Suspense } from "react"
import { ProductDetailsServer } from "./server"

export const ProductDetails = ({slug}) => {
    return (
        <Suspense fallback={null}>
            <ProductDetailsServer slug={slug}/>
        </Suspense>
    )
}