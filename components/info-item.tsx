import React from 'react';
import Image from "next/image";

interface Props {
    name: string;
    variable?: 'default' | 'lg' | 'secondary' | 'white' | 'lgFixed' | 'whiteFixed';
    pathImg?: string;
}

const InfoItem: React.FC<Props> = ({name, variable = 'default', pathImg}) => {
    const variantClasses = {
        default: 'text-[9px] py-[4px] px-[8px] rounded-[3px] border-[0.5px] text-blue',
        secondary: 'text-[16px] text-lightBlack border-[1px] rounded-[6px] py-[10px] px-[28px] gap-[10px]',
        lg: 'px-[10px] py-[6.5px] rounded-[6px] border-[1px] text-[16px] text-blue',
        lgFixed: 'px-[10px] py-[6.5px] max-w-[140px] w-full rounded-[6px] border-[1px] text-[16px] text-blue',
        white: 'text-[10px] py-[9px] px-[16px] text-blue bg-white rounded-[6px]',
        whiteFixed: 'tex-[14px] rounded-[6px] max-w-[114px] w-full bg-white py-[5px] text-blue'
    };

    const selectedVariantClasses = variantClasses[variable] || variantClasses.default;

    return (
        <span className={`flex items-center justify-center font-[400] border-blue w-fit ${selectedVariantClasses}`}>
            {pathImg && <Image src={`/images/${pathImg}.svg`} alt={pathImg} width={18} height={18} />}
            {name}
        </span>
    );
}

export default InfoItem