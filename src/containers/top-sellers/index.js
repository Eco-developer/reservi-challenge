import { Suspense } from "react"
import { TopSellersServer } from "./server"

export const TopSellers = () => {
    return (
        <Suspense fallback={null}>
            <TopSellersServer/>
        </Suspense>
    )
}