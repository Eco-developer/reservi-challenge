import { currencyFormat } from "@/utils";
import Image from "next/image";

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
            style={{
              height:"320px"
            }}
            className="object-contain"
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-4xl font-bold text-gray-800 mb-5">{title}</h1>
          <div className="mb-6">
            {original_price && (
              <p className="text-lg line-through text-gray-400">
                {currencyFormat(original_price)}
              </p>
            )}
            <p className="text-5xl font-bold text-indigo-600">
              {currencyFormat(price)}
            </p>
          </div>
          <div className="flex items-center space-x-4 mb-6">
            {accepts_mercadopago ? (
              <span className="inline-block p-3 bg-green-100 text-green-800 text-sm font-medium rounded-lg">
                Acepta Mercado Pago
              </span>
            ) : (
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-lg">
                No acepta Mercado Pago
              </span>
            )}
          </div>
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Comprar ahora
          </a>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              Información adicional
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>Vendedor ID:</strong> {seller_id}
              </li>
              {official_store_id && (
                <li>
                  <strong>Tienda oficial ID:</strong> {official_store_id}
                </li>
              )}
              <li>
                <strong>Garantía:</strong> {warranty}
              </li>
              <li>
                <strong>Fecha de creación:</strong>{" "}
                {new Date(date_created).toLocaleDateString()}
              </li>
              <li>
                <strong>Última actualización:</strong>{" "}
                {new Date(last_updated).toLocaleDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {pictures.length > 0 ? (
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Galería de imágenes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {pictures.map((picture) => (
              <div
                key={picture.id}
                className="h-80"
              >
                <Image
                  src={picture.url}
                  alt={title}
                  height={320}
                  width={300}
                  style={{
                    height:"320px"
                  }}
                  className="h-80 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )
      :null}
    </div>
  )
};