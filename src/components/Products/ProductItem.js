import React, { useContext } from 'react'
import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import { useDispatch } from 'react-redux'
import { productsActions } from '../../store/products-slice';
import { ProductsContext } from '../../context/products-context';

const ProductItem = (props) => {
    const { isFav, title, description, id } = props;
    // toolkit
    const dispatch = useDispatch();

    // context
    // const toggleFav = useContext(ProductsContext).toggleFav;

    const favoriteHandler = (e) => {
        // toolkit
        dispatch(productsActions.toggleFav(id));

        // context
        // toggleFav(id);
    };

    return (
        <Card>
            <div className={classes['product-item']}>
                <h2 className={isFav ? classes['is-fav'] : ''}>
                    {title}
                </h2>
                <p>{description}</p>
                <button
                    onClick={favoriteHandler}
                    className={!isFav ? classes['button-outline'] : ''}>
                    {isFav ? 'Un-Favorite' : 'Favorite'}
                </button>
            </div>
        </Card>
    )
}

export default ProductItem