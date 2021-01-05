import React, {useReducer } from 'react';

export function Checkbox() {
    let [checked, toggle] = useReducer(
        reducer,
        false
    );

    function reducer(state) {
        return !state;
    }

    return(
        <>
        <label htmlFor="checkbox">
            { checked ? 'checked' : 'not checked'}
        </label>
        <input 
            onChange={toggle}
            id="checkbox"
            type="checkbox"
            value={checked}/>
        </>
    )
}
