import React from 'react'
import { useStore } from '../hooks-store/store';
import classes from './Counter.module.css';

const Counter = (props) => {
    const [state, dispatch] = useStore(true);
    console.log(state);
    return (
        <div className={classes.counter}>
            <p>Only there to proof, that you can have multiple state slices.</p>
            <p>Counter: {state.counter}</p>
            <button onClick={() => dispatch('ADD', 1)}>Add 1</button>
            <button onClick={() => dispatch('ADD', 5)}>Add 5</button>
            <button onClick={() => dispatch('SUB', 1)}>Subtract 1</button>
            <button onClick={() => dispatch('SUB', 5)}>Subtract 5</button>
        </div>
    );
}

export default Counter