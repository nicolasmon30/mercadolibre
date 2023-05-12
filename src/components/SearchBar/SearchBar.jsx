/**
 * Importacion de Hooks y Store
 */
import { useState } from 'react';
import { useProductsStore } from '../../store/Products';
import { useNavigate } from "react-router-dom";


export const SearchBar = () => {
  
  /* Inicalizo useNAvigate en una constante para poder utilizarla en el componente  */
  const navigate = useNavigate();

  /*
    Creo un estado local llamado "queryParam" que utilizo para almacenar el valor del parámetro de búsqueda introducido en el input.
  */
  const [queryParam, setqueryParam] = useState('');

  /*
    Inicializo el store Para tarer la data a filtrar , trayendo la funcion fecthData que es la encargada de hacer fecth al api para fiiltrar
   */
  const { fetchData } = useProductsStore();
  /*
    la funcion "queryChange"  se llama cuando cambia el valor del input búsqueda y actualiza el estado "queryParam" con el valor actual.
   */
  const queryChange = (event) => {
    setqueryParam(event.target.value)
  }

  /**
    Funcion encargada de capturar el evento submit cuando le damos click en el boton buscar  
  */
  const filterProducts = async (event) => {
    event.preventDefault();
    /*
      Tomamos el queryparam que es el valor de el input de busqueda y lo envamos por parametro a la funcion que esta en el store de Products.jsx para poder filtrar con el parametro recibido
    */
    await fetchData(queryParam);
    /*
      Cuando obtenemos la respuesta de la api en la funcion fetchData , hacemos una redireccion a la url /items?serch= y el valor ingresado por el input , en este momento en nuestro esta global de el estore ya tenemos los pdoructos filtrados que se van a mostrar en la vista a donde se va a redireccionar.
    */
    await navigate(`/items?search=${queryParam}`);
  }



  return (
    <div className="search">
        <form onSubmit={filterProducts}>
            <input type="text" value={queryParam} onChange={queryChange} placeholder="Nunca dejes de buscar" />
            <button type='submit'>
                <img src="../src/assets/images/ic_Search.png" alt="" />
            </button>
        </form>
    </div>
  )
}
