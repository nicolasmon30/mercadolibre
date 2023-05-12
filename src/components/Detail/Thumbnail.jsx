import React from 'react'

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
