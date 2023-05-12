/* 
  Recibo por propiedad la data del producto a detalle a mostrar. 
  Esta propiedad product viene de la page Detail y con esta propiedad accedo a las propiedades para obtener el titulo, la cantidad vendida y el precio. 
*/
export const Meta = ({product}) => {

  return (
    <>
      <div className="detail__meta">
          <p>Nuevo - {product.sold_quantity} vendidos</p>
          <h1>{product.title}</h1>
          <h3>
           $ {product.price}
          </h3>
          <a href="" className="btn">
            Comprar
          </a>
      </div>
    </>
  )
}
