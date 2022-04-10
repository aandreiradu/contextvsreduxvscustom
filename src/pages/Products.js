import React from 'react'
import ProductItem from '../components/Products/ProductItem'
import classes from './Products.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import { ProductsContext } from '../context/products-context';

const Products = () => {
    // with contextAPI
    // const products = useContext(ProductsContext).products;

    // with redux toolkit
    const products = useSelector((state) => state.products.products);


    return (
        <ul className={classes['products-list']}>
            {
                products.map((product) => (
                    <ProductItem
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        id={product.id}
                        isFav={product.isFavorite}
                    />
                ))
            }
        </ul>
    )
}

export default Products