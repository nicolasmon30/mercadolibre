import React from 'react'

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
