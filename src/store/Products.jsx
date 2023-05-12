/**
 * Importamos Zustando para manejar nuestros estados globales en nuestra aplicación
 */
import { create } from 'zustand';

const useProducts = create((set) => ({
  /**
 * Inicializamos nuestros estados globales en este caso son tipo Array ya que se van a utilizar para guardar el resultado de el consumo de ele api.
 */
  products: [],
  /**
   * Recibimos como parametro el valor enviado por el input de busqueda
   */
  fetchData: async (param) => {
    try {
      /**
       * Ejecutamos nuestro llamado al endpoit enviando como paremtro en la url el valor de la busqueda realizada
       */
      const response = await fetch(`${process.env.REACT_APP_API_SEARCH}?q=${param}`);
      /**
      * La respuesta la formateamos a json para convertirla en objeto y poder trabajarla de mejor manera y esto lo gialamos a productDetail
      */
      const temp = await response.json();
      /**
       * La respuesta como bienen muchisimos datos con .splice limitamos a que la respuesta solo nos de 4 elementos para trabajar
       */
      const products = await temp.results.slice(0, 4);
      /**
       * Actualizamos el valor de nuestro estado global product con la respuesta de el endpoint
       */
      set({ products });
    } catch (error) {
      console.log("error", error);
    }
  }
}));

export const useProductsStore = () => useProducts();
