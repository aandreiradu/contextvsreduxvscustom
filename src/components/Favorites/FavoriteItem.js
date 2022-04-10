import React from 'react'
import classes from './FavoriteItem.module.css'
import Card from '../UI/Card';

const FavoriteItem = (props) => {
    const { title, description } = props;
    return (
        <Card>
            <div className={classes['favorite-item']}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Card>
    )
}

export default FavoriteItem