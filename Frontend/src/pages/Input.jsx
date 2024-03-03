import React from 'react';

const Input = ({ type, name, value, placeholder, onChange }) => {
    return (
        <input
            className='px-3 py-2 w-full border-2 rounded bg-gray-50  outline-black'
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;