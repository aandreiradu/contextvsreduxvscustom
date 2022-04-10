import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.module.css';
import classes from './Products.module.css';
import { ProductsContext } from '../context/products-context';


const Favorites = () => {
    // redux-toolkit
    const favoriteProducts = useSelector((state) => state.products.products).filter((product) => product.isFavorite);
    console.log(favoriteProducts);

    // contextAPI
    // const favoriteProducts = useContext(ProductsContext).products.filter((prod) => prod.isFavorite);
    const fallBackContent = (
        <p className='placeholder' style={{ textAlign: 'center' }}>
            No favorites products. Maybe add some? 😉
        </p>
    )

    if (favoriteProducts.length === 0) {
        return fallBackContent;
    }

    return (
        <ul className={classes['products-list']}>
            {favoriteProducts.map((item) => (
                <FavoriteItem
                    title={item.title}
                    description={item.description}
                    id={item.id}
                    key={item.id}
                />
            ))}
        </ul>
    )
}

export default Favorites