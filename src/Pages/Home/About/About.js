import React from 'react';
import img1 from '../../../assets/images/about_us/person.jpg';
import img2 from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='flex items-center my-24 relative'>
            <div className=''>
                <img className='w-3/4 rounded-lg' src={ img1 } alt="" />
                <img className='absolute w-1/4 -bottom-14 left-72 border-8 rounded-lg border-white' src={ img2 } alt="" />
            </div>
            <div className=''>
                <p className="font-bold text-lg mb-6 text-orange-500">About Us</p>
                <h2 className='font-bold text-4xl my-6'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p className='mb-4 text-base'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <p className='mb-4 text-base'>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button type="button" className=" text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700">Get More Info</button>
            </div>
        </div>
    );
};

export default About;