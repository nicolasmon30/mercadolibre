import { useEffect } from 'react';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { useProductsStore } from '../../store/Products';

export const Search = (() => {
    const { products, fetchData } = useProductsStore();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryParam = urlSearchParams.get('search');

    useEffect(() => {
        if (queryParam) {
            fetchData(queryParam);
        }
    }, [queryParam, fetchData]);

    return (
        <>
            <div className="container">
                <Breadcrumb />
                <div className="searchLayout">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
});
