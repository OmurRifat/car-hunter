import React from 'react';
import img1 from '../../../assets/images/info/schedule.png'
import img2 from '../../../assets/images/info/telephone.png'
import img3 from '../../../assets/images/info/map.png'

const AditionalInfo = () => {
    return (
        <div className=' bg-black rounded-lg py-48 grid grid-cols-3 text-center'>
            <div className="flex items-center justify-evenly">
                <img className='w-10 ml-auto' src={ img1 } alt="" />
                <div className="ml-6">
                    <p className="text-base text-white">We are open monday-friday</p>
                    <h4 className="text-xl text-white font-bold mt-2">7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className="flex items-center justify-evenly">
                <img className='w-10 ml-auto' src={ img2 } alt="" />
                <div className="ml-6">
                    <p className="text-base text-white">Have a question?</p>
                    <h4 className="text-xl text-white font-bold mt-2">+25462512658</h4>
                </div>
            </div>
            <div className="flex items-center justify-evenly">
                <img className='w-10 ml-auto' src={ img3 } alt="" />
                <div className="ml-6">
                    <p className="text-base text-white">Need a repair? our adress</p>
                    <h4 className="text-xl text-white font-bold mt-2">Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default AditionalInfo;