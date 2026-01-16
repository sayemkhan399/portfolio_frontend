import React from 'react';
import logo from '../assets/logo.svg';
const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-30" />
        </div>
    );
};

export default Logo;