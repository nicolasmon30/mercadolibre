/**
 * Importacion de Hooks, componentes y store
 */
import { useEffect } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { useProductsStore } from '../../store/Products';

export const Search = (() => {
    /**
     * Inicializamos el store useProductsStore y traemos el estado global products y la funcion fetchData
     * products = Estado global que guarda la data obtenida de la funcion fetchData
     * fetchData = funcion encargdada de consumir el api para poder setera en el estado products
     */
    const { products, fetchData } = useProductsStore();
    /**
     * Inicializamos la clase de la instancia URLSearchParams, que nos permite trabajar con los paramtros de la cadena de la url
     */
    const urlSearchParams = new URLSearchParams(window.location.search);
    /**
     * Con el metodo .get de la instancia creada obtenemos el valor de el parametro search que viene en la ur
     */
    const queryParam = urlSearchParams.get('search');


    /**
     * Utilizamos useEffect para ejecutar la funcion fetchData , solo si hay un cambio en parametro de la url o hay un cambio en la funcion de fecthData
     */

    useEffect(() => {
        if (queryParam) {
            fetchData(queryParam);
        }
    }, [queryParam, fetchData]);

    return (
        <>
            <div className="container">
                <Breadcrumb />
                <div className="searchLayout">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
});
