import { create } from 'zustand';

const useProducts = create((set) => ({
  products: [],
  fetchData: async (param) => {
    try {

      const response = await fetch(`${process.env.REACT_APP_API_SEARCH}?q=${param}`);
      const temp = await response.json();
      const products = await temp.results.slice(0,4);
      set({ products}); 
    } catch (error) {
      console.log("error", error);
    }
  }
}));

export const useProductsStore = () => useProducts();
