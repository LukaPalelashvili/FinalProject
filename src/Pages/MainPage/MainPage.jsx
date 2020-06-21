import React, { useContext, useEffect, useState } from 'react';
import SortBlock from '../../Components/SortBlock/SortBlock';
import Cards from '../../Components/Cards/Cards';
import { CartContext } from '../../Context/CartContext';
import Header from '../../Components/Header/Header';

const MainPage = () => {
    const { products } = useContext(CartContext);
    const [updatedProducts, setUpdatedProducts] = useState([]);

    useEffect(() => {
        if (!products) return;
        setUpdatedProducts(products);
    }, [products]);

    const updateSorting = (value) => {
        const sortedProducts =
            Number(value) === 1
                ? []
                      .concat(products)
                      .sort((a, b) => (a.price > b.price ? 1 : -1))
                : Number(value) === 2
                ? []
                      .concat(products)
                      .sort((a, b) => (a.price < b.price ? 1 : -1))
                : products;

        setUpdatedProducts(sortedProducts);
    };

    const filterBySize = (size) => {
        const prods =
            size === 'all' ? products : products.filter((v) => v.size === size);
        setUpdatedProducts(prods);
    };

    return (
        <React.Fragment>
            <Header />
            <main>
                <SortBlock
                    productsCount={updatedProducts.length}
                    sizeFilter={filterBySize}
                    updateSorting={updateSorting}
                />
                <Cards products={updatedProducts} />
            </main>
        </React.Fragment>
    );
};

export default MainPage;
