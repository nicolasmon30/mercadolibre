import { useState } from 'react';
import { useProductsStore } from '../../store/Products';
import { useNavigate } from "react-router-dom";


export const SearchBar = () => {
  
  const navigate = useNavigate();
  const [queryParam, setqueryParam] = useState('');
  const { fetchData } = useProductsStore();

  const queryChange = (event) => {
    setqueryParam(event.target.value)
  }
  const filterProducts = async (event) => {
    event.preventDefault();
    await fetchData(queryParam);
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
