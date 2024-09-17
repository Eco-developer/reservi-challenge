export default function NotFound() {  
    return (  
      <div className="h-full flex flex-col items-center justify-center text-center bg-gray-100">  
        <h1 className="text-4xl font-bold text-gray-800">Página No Encontrada</h1>  
        <p className="mt-4 text-lg text-gray-600">  
          Lo sentimos, la página que buscas no existe.  
        </p>  
        <a  
          href="/"  
          className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"  
        >  
          Volver a la página principal  
        </a>  
      </div>  
    );  
  }  