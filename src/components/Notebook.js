import React from 'react';

import './Notebook.css';
const Notebook = (props) => {
    const {note:{brand, model, cost, img}} = props;
    return (
        <div className={'item'}>
            <h1>Brand: {brand}</h1>
            <h2>Model: {model}</h2>
            <h2>Cost: {cost}</h2>
            <img
                src={img}
                alt={brand}/>
        </div>
    );
};

export default Notebook;