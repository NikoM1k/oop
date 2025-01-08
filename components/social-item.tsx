import React from 'react';
import Image from "next/image";

interface Props {
    icon: string;
    link: string;
}

const SocialItem: React.FC<Props> = ({icon, link}) => {
    return (
        <a className="flex justify-center items-center w-[41px] h-[41px] bg-blue rounded-full" href="">
            <Image src={`/images/${icon}.svg`} alt={icon} className="w-auto h-auto" width={1} height={1} />        </a>
    );
}

export default SocialItem