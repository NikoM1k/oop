'use client';

import * as React from 'react';

interface Props {
    className?: string;
    name: string;
    variant?: 'default' | 'secondary';
    size?: 'default';
}

const Button: React.FC<Props> = ({ className, name, variant = 'default', size = 'default' }) => {
    const baseClasses = 'flex items-center justify-center whitespace-nowrap rounded-[6px] font-[400]';

    const variantClasses = {
        default: 'bg-blue text-[16px] text-white',
        secondary: 'text-[16px] text-blue border-[1px] border-blue',
    };

    const sizeClasses = {
        default: 'max-h-[39px] px-[25px] py-[10px]',
    };

    const selectedVariantClasses = variantClasses[variant] || variantClasses.default;
    const selectedSizeClasses = sizeClasses[size] || sizeClasses.default;

    return (
        <button className={`${baseClasses} ${selectedVariantClasses} ${selectedSizeClasses} ${className}`}>
            {name}
        </button>
    );
}

export default Button;