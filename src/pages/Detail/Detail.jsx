import { useState, useEffect } from "react";
import { useDetailProductStore } from "../../store/ProducDetail";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { Thumbnail } from "../../components/Detail/Thumbnail";
import { Description } from "../../components/Detail/Description";
import { Meta } from "../../components/Detail/Meta";

export const Detail = () => {
  const { productDetail, productDescription ,fetchData , getDescription } = useDetailProductStore();
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    if (id) {
      fetchData(id);
      getDescription(id);
    }
  }, [id, fetchData]);

  return (
    <>
      <div className="container">
        <Breadcrumb  />
        <div className="detail">
          <div className="detail__row">
            <div className="detail__left">
              <Thumbnail  product={productDetail} />
              <Meta product={productDetail} />
            </div>
            <div className="detail__right">
              <Description product={productDetail}  productDescription={productDescription} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
