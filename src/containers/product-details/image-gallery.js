import Image from "next/image"

export const ImageGallery = ({pictures=[]}) => {
    return (
        pictures.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Galería de imágenes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {pictures.map((picture, index) => (
                  <div
                    key={picture.id}
                    className="h-80"
                  >
                    <Image
                      src={picture.url}
                      alt={`picture-${index}`}
                      height={320}
                      width={300}
                      className="h-80 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
        )
        :null
    )
}