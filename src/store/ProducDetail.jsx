/**
 * Importamos Zustando para manejar nuestros estados globales en nuestra aplicación
 */
import { create } from "zustand";

const useDetailProduct = create((set) => ({
    /**
     * Inicializamos nuestros estados globales en este caso son tipo Array ya que se van a utilizar para guardar el resultado de el consumo de ele api.
     */
    productDetail : [],
    productDescription: [], 
    /**
     * Recibimos el id de el producto a consultar en el api
     */
    fetchData : async (id) => {
        try {
            /**
             * Ejecutamos el fecth para hacer la respectiva llamada al api y guardamos la respuesta en la variable response
             */
            const response = await fetch(`${process.env.REACT_APP_API_GENERAL}/${id}`);
            /**
             * La respuesta la formateamos a json para convertirla en objeto y poder trabajarla de mejor manera y esto lo gialamos a productDetail
             */
            const productDetail = await response.json();
            /**
             * Actualizamos el valor de nuestro estado global productDetail con la respuesta de el endpoint
             */
            set({ productDetail}); 
        } catch (error) {
            console.log("error", error)
        }
    },
    /**
     * Recibimos el id de el producto a consultar en el api
     */
    getDescription : async (id) => {
        try {
            /**
             * Ejecutamos el fecth para hacer la respectiva llamada al api y guardamos la respuesta en la variable response este endpoint nos trae solo la description del product el cual tenemos su id
             */
            const response = await fetch(`${process.env.REACT_APP_API_GENERAL}/${id}/description`);
            /**
             * La respuesta la formateamos a json para convertirla en objeto y poder trabajarla de mejor manera y esto lo gialamos a productDetail
             */
            const productDescription = await response.json();
            /**
             * Actualizamos el valor de nuestro estado global productDescription con la respuesta de el endpoint
             */
            set({ productDescription}); 
        } catch (error) {
            console.log("error", error)
        }
    }
}))

export const useDetailProductStore = () => useDetailProduct();