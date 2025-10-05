import React from 'react';
import { ButtonProps } from '@/interfaces';


const Button: React.FC<ButtonProps> = ({size, shape, children}) => {
    const baseStyles = "px-4 py-2 font-semibold focus:outline-none";
    const sizeStyles = {
        small: "text-sm",
        medium: "text-md",
        large: "text-lg",
    }[size];
    const shapeStyles = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full",
    }[shape];

    return (
        <button className={`${baseStyles} ${sizeStyles} ${shapeStyles}`}>
            {children}
        </button>
    );
}

export default Button;