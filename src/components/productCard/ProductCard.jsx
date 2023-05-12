import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();


    const goToDetail = (idProduct) => {
        navigate(`/items/${idProduct}`);
    }


    return (
        <>
            <article className="product" onClick={() => goToDetail(product.id)}>
                <figure className="product__thumbnail">
                    <img src={product.thumbnail} alt={product.title} title={product.title} />
                </figure>
                <div className="product__body">
                    <div className="product__description">
                        <div className="product__price">
                            <p>$ {product.price}</p>
                            <img src="../src/assets/images/ic_shipping.png" alt="" />
                        </div>
                        <h3>{product.title}</h3>
                    </div>
                    <div className="product__location">
                        <p>
                            {product.address.city_name}
                        </p>
                    </div>
                </div>
            </article>
        </>
    )
}
