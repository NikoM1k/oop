'use client';

import * as React from 'react';
import Image from "next/image";

interface Props {
    className?: string;
    name: string;
    variant?: 'default' | 'secondary';
}

const Select: React.FC<Props> = ({className, name, variant = 'default'}) => {
    const variantClasses = {
        default: '',
        secondary: 'px-[36px] py-[7px] bg-white',
    };

    return(
        <div className={`${className} ${variantClasses[variant]} max-w-[225px] min-w-[180px] min-h-[39px] justify-center items-center w-fit cursor-pointer border-blue border-[1px] flex gap-[10px] rounded-[10px]`}>
            <p className="text-blue font-[700] text-[16px]">{name}</p>
            <Image src="/images/chevronDown.svg" alt="chevronDown" width={11} height={8} />
        </div>
    );
}

export default Select