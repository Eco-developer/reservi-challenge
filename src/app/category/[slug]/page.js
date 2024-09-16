import { CategoryProducts } from "@/containers";

export default function CategoryPage({params}) {
    return (
        <CategoryProducts slug={params.slug}/>
    )
};