import React from 'react';

import styels from './myinput.module.css';

const MyInput = ({ type, name, value, placeholder, onChange }) => {
    return (
        <input
            className={styels.myInput}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default MyInput;
