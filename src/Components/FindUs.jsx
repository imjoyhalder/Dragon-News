import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us on</h2>
            <div className='join flex join-vertical *:bg-base-100 gap-2'>
                <button className='btn join-item justify-start'>
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className='btn join-item justify-start'>
                    <FaInstagram></FaInstagram> Instagram
                </button>
                <button className='btn join-item justify-start'>
                    <FaYoutube></FaYoutube> YouTube
                </button>
            </div>
        </div>
    );
};

export default FindUs;