import React from 'react'
import ProductItem from '../components/Products/ProductItem'
import classes from './Products.module.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { useContext } from 'react';
// import { ProductsContext } from '../context/products-context';
import { useStore } from '../hooks-store/store';

const Products = () => {
    // with contextAPI
    // const products = useContext(ProductsContext).products;

    // with redux toolkit
    // const products = useSelector((state) => state.products.products);


    // with custom-hook
    const [state, dispatch] = useStore();
    const products = state.products;

    return (
        <ul className={classes['products-list']}>
            {products && products.map(prod => (
                <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    )
}

export default Products