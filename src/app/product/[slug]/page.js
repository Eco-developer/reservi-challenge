import { ProductDetails } from '@/containers';

export default function ProductPage({params}) {
  return (
    <ProductDetails slug={params.slug}/>
  )
}