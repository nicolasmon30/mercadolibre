import { create } from "zustand";

const useDetailProduct = create((set) => ({
    productDetail : [],
    productDescription: [], 
    fetchData : async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_GENERAL}/${id}`);
            const productDetail = await response.json();
            set({ productDetail}); 
        } catch (error) {
            console.log("error", error)
        }
    },
    getDescription : async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_GENERAL}/${id}/description`);
            const productDescription = await response.json();
            set({ productDescription}); 
        } catch (error) {
            console.log("error", error)
        }
    }
}))

export const useDetailProductStore = () => useDetailProduct();