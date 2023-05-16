/**
 * Importacion de Hooks, componentes y estore
 */
import { useState, useEffect, useCallback } from "react";
import { useDetailProductStore } from "../../store/ProducDetail";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { Thumbnail } from "../../components/Detail/Thumbnail";
import { Description } from "../../components/Detail/Description";
import { Meta } from "../../components/Detail/Meta";

export const Detail = () => {
  /**
   * Inicializo el store useDetailProductStore para poder traer a mi componente , el estado productDetail, productDescription, las funciones fecthData y getDEscription
   * productDetail = Este estado global me trae toda la data para pintar la vista detail
   * productDescription = Este estado global me tare la descripcion de el producti
   * fetchData = funcion de el store encargada de hacer el consumo de el api para obtener la data de del detalle y setear en el estado product detail
   * getDescription = funcion que con el id del producto actual me trae la descipcion del actual producto , es consumo de api
   */
  const { productDetail,fetchData} = useDetailProductStore();
  /**
   * Inicializo un estado local para obtener el id que viene por la url 
   */
  const [id, setId] = useState(useParams().id);
  /**
   * Utilizamos useEffect para ejecutar las funciones de fetchData y getDescription cuando se prouzca un cambio en el id
   */
  useEffect(() => {
    /**
     * Comporbamos que el id no es null. Si el id es válido, llamamos a la función fetchData y a la función getDescription, pasando el id como parámetro para obtener información específica de un producto.
     */
    if(id){
      fetchData(id);
    }
  }, [id,fetchData]);
  return (
    <>
    {
      productDetail &&
      <div className="container">
        <Breadcrumb  />
        <div className="detail">
          <div className="detail__row">
            <div className="detail__left">
              <Thumbnail  product={productDetail} />
              <Meta product={productDetail} />
            </div>
            <div className="detail__right">
              <Description product={productDetail}/>
            </div>
          </div>
        </div>
      </div> 
    }
      
    </>
  )
}
