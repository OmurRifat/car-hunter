import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service'

const Services = () => {
    const services = useLoaderData();
    // console.log(services)
    return (
        <div className='mt-36 mb-20 text-center'>
            <p className="font-bold text-lg mb-6 text-orange-500">Service</p>
            <h2 className='font-bold text-4xl mb-6'>Our Service Area</h2>
            <p className='mb-7 text-base'>
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
            </p>
            <div className='grid grid-cols-3 gap-y-6'>
                {
                    services.map(service => <Service
                        key={ service._id }
                        service={ service }
                    ></Service>)
                }
            </div>
            <button type="button" className=" my-10 font-semibold text-orange-500 border border-orange-500 hover:text-white hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700">More Services</button>
        </div>
    );
};

export default Services;