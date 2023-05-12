
/* Recibo por propiedad la data del producto a detalle a mostrar esta propiedad productDescription viene de la page Detail y con esta propiedad accedo a las propiedades para obtener la descripcion de el producto */
export const Description = ({ productDescription }) => {
    return (
        <>
            <div className="detail__description">
                <h2>
                    Descripción del producto
                </h2>
                <p>
                    {productDescription.plain_text}
                </p>
                <a href="" className="btn">Comprar</a>
            </div>
        </>
    )
}
