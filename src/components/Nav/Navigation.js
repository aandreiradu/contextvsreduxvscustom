import React from 'react'
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <header className={classes['main-header']}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>All Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation