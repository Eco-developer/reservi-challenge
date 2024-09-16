

import { ProductDetails } from '@/containers';


export default function ProductPage({params}) {
  return (
    <div>
        <ProductDetails slug={params.slug}/>
    </div>
  );
}