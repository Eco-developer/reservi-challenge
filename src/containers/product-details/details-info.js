import { currencyFormat } from "@/utils"
import axios from "axios";

export const DetailsInfo = ({
  id,
  title,
  price,
  original_price,
  warranty,
  accepts_mercadopago,
  seller_id,
  official_store_id,
  date_created,
  last_updated,
  thumbnail,
}) =>  {
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/create-checkout-session', {
        id,
        price,
        name: title,
        imagen: thumbnail,
      });
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error);
    }
  };
  return ( 
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
      <button
          onClick={handleSubmit}
          className="inline-block px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
      >
          Comprar ahora
      </button>
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
  )
}