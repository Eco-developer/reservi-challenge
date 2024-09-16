import Image from "next/image";
import { ImageGallery } from "./image-gallery";
import { DetailsInfo } from "./details-info";

export const ProductDetailsClient = ({ product }) => {
  const {
    title,
    price,
    original_price,
    thumbnail,
    pictures,
    warranty,
    accepts_mercadopago,
    permalink,
    seller_id,
    official_store_id,
    date_created,
    last_updated
  } = product;
  
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="rounded-lg mb-5 md:mb-0 flex justify-center md:w-96">
          <Image
            src={pictures[0] ? pictures[0].url : thumbnail}
            alt={title}
            width={300}
            height={320}
            className="h-80 object-contain"
          />
        </div>
        <DetailsInfo
          title={title}
          price={price}
          original_price={original_price}
          warranty={warranty}
          accepts_mercadopago={accepts_mercadopago}
          permalink={permalink}
          seller_id={seller_id}
          official_store_id={official_store_id}
          date_created={date_created}
          last_updated={last_updated}
        />
      </div>
      <ImageGallery
        pictures={pictures}
      />
    </div>
  )
};