import React from 'react';
import Image from "next/image";

interface Props {
    name: string;
    variable?: 'default' | 'lg' | 'secondary' | 'white' | 'lgFixed' | 'whiteFixed';
    pathImg?: string;
}

const InfoItem: React.FC<Props> = ({name, variable = 'default', pathImg}) => {
    const variantClasses = {
        default: 'text-[12px] py-[4px] px-[8px] rounded-[3px] border-[0.5px] text-blue font-[700]',
        secondary: 'text-[16px] text-lightBlack border-[1px] rounded-[6px] py-[10px] px-[28px] gap-[10px] items-center',
        lg: 'px-[10px] py-[6.5px] rounded-[6px] border-[1px] text-[16px] text-blue font-[700]',
        lgFixed: 'px-[10px] py-[6.5px] max-w-[140px] w-full rounded-[6px] border-[1px] text-[16px] text-blue',
        white: 'text-[12px] py-[9px] px-[16px] text-blue bg-white rounded-[6px]',
        whiteFixed: 'tex-[14px] rounded-[6px] max-w-[114px] w-full bg-white py-[5px] text-blue font-[700]'
    };

    const selectedVariantClasses = variantClasses[variable] || variantClasses.default;

    return (
        <div className={`flex items-center justify-center font-[400] border-blue w-fit ${selectedVariantClasses}`}>
            {pathImg && <Image src={`/images/${pathImg}.svg`} alt={pathImg} width={18} height={18} />}
            <span className="relative top-[2px]">{name}</span>
        </div>
    );
}

export default InfoItem