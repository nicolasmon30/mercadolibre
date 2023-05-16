
/* Recibo por propiedad la data del producto a detalle a mostrar esta propiedad productDescription viene de la page Detail y con esta propiedad accedo a las propiedades para obtener la descripcion de el producto */
export const Description = ({ product }) => {
    return (
        <>
            <div className="detail__description">
                <h2>
                    Descripción del producto
                </h2>
                <p>
                    {product.product.description}
                </p>
                <a href="" className="btn">Comprar</a>
            </div>
        </>
    )
}
