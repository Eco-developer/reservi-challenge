export const currencyFormat = (price) => {
    return  new Intl.NumberFormat('es-CL', {  
        style: 'currency',  
        currency: 'COP'  
    }).format(price) 
};