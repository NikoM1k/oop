import React from 'react';
import Image from "next/image";

const InfoBlock: React.FC = () => {
    return (
        <div className="hidden lg:flex bg-blue rounded-[25px] relative max-w-[1033px] w-full m-auto pt-[59.5px] pb-[59.5px] h-[234px] text-center justify-center">
            <p className="text-white text-[32px] max-w-[671px] font-[700]">Через собственное развитие мы развиваем и популяризируем гештальт-подход</p>
            <Image className=" absolute right-0 top-[-20px]" src="/images/palm.svg" alt="palm" width={217} height={254} />
        </div>
    );
};

export default InfoBlock;