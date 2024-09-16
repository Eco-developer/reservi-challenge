import { CategoryProducts } from "@/containers";

export default function CategoryPage({params}) {
    return (
        <div>
            <CategoryProducts slug={params.slug}/>
        </div>
    );
  }