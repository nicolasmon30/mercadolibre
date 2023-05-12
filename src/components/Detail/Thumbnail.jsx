/* 
  Recibo por propiedad la data del producto a detalle a mostrar. 
  Esta propiedad product viene de la page Detail y con esta propiedad accedo a las propiedades para obtener el thumbnail. 
*/
export const Thumbnail = ({product}) => {
  return (
    <>
        <div className="detail__thumbnail">
            <figure>
                <img src={product.thumbnail} alt={product.title} title={product.title} />
            </figure>
        </div>
    </>
  )
}
