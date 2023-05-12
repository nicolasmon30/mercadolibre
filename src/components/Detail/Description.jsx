import React from 'react'

export const Description = ({productDescription}) => {
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
