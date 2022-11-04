import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (

        <div className=" w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-left">
            <Link to="#">
                <img className="p-8 rounded-t-lg" src={ img } alt="product image" />
            </Link>
            <div className="px-5 pb-5 ml-3">
                <Link to="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ title }</h5>
                </Link>
                <div className="">
                    <span className="text-lg font-bold text-orange-500 dark:text-white">Price: ${ price }</span>
                </div>
            </div>
        </div>

    );
};

export default Service;