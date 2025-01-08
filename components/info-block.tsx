import React from 'react';
import Image from "next/image";

const InfoBlock: React.FC = () => {
    return (
        <div className="flex bg-blue rounded-[25px] relative max-w-[1032px] w-full m-auto pt-[58px] pb-[61px] pl-[69px] h-[234px]">
            <p className="text-white text-[32px] max-w-[671px] font-[500]">Через собственное развитие мы развиваем и популяризируем гештальт-подход</p>
            <Image className="absolute right-[39px] top-[-20px]" src="/images/palm.svg" alt="palm" width={217} height={254} />
        </div>
    );
};

export default InfoBlock;