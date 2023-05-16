/* Importo Hook useNAvigate para porporcionar navegacion desde este componente */
import { useNavigate } from "react-router-dom";

/*
    El componente acepta una prop llamada "product", que es un objeto que contiene información sobre el producto que se va a mostrar en la vista previa de la tarjeta.

    El componente utiliza el hook "useNavigate" de la biblioteca "react-router-dom" para proporcionar una navegación a la página de detalles del producto al hacer clic en la tarjeta.

    El componente "ProductCard" tiene una función llamada "goToDetail" que recibe un parámetro "idProduct". Esta función se llama cuando se hace clic en la tarjeta del producto y utiliza el objeto "navigate" devuelto por el hook "useNavigate" para navegar a la página de detalles del producto.

    Cuando se hace clic en la tarjeta del producto, se llama a la función "goToDetail" y se pasa el id del producto como parámetro a la función "navigate" para que pueda navegar a la página de detalles del producto correspondiente.

*/

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const goToDetail = (idProduct) => {
        navigate(`/items/${idProduct}`);
    }


    return (
        <>
            <article className="product" onClick={() => goToDetail(product.id)}>
                <figure className="product__thumbnail">
                    <img src={product.picture} alt={product.title} title={product.title} />
                </figure>
                <div className="product__body">
                    <div className="product__description">
                        <div className="product__price">
                            <p>{product.price.currency} {product.price.amount}</p>
                            { product.free_shipping  && <img src="../src/assets/images/ic_shipping.png" alt="" />}
        
                        </div>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="product__location">
                        <p>
                            {product.address}
                        </p>
                    </div>
                </div>
            </article>
        </>
    )
}
