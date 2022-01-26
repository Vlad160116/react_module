import React from 'react';
import Notebook from "../Notebook";

let notebooks = [
    {
        id: 1,
        brand: 'Apple',
        model: 'Pro',
        cost: '100',
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg'
    },
    {
        id: 2,
        brand: 'HP',
        model: 'Probook 450 G8',
        cost: '500',
        img: 'https://i.eldorado.ua//goods_images/1039096/7202091-1623400136.jpg'
    }
]


const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook=><Notebook note:{notebook}/>)}
        </div>
    );
};

export default Notebooks;