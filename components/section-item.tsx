import React from 'react';
import Image from "next/image";

interface Props {
    name: string;
}

const SectionItem: React.FC<Props> = ({name}) => {
    return (
        <div className="flex border-[4px] border-white rounded-[6px] items-center w-[160px] h-[120px] justify-center relative">
            <Image className="absolute top-[-18px]" src="/images/chevronDown.svg" alt="arrow" width={11} height={11} />
            <span className="text-[26px] text-black uppercase">{name}</span>
        </div>
    );
}

export default SectionItem