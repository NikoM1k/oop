import React from 'react';
import Image from "next/image";

interface Props {
    className?: string;
    imageUrl: string;
}

const AvatarImage: React.FC<Props> =({ imageUrl, className}) => {
    return(
        <Image
            src={`/images/${imageUrl}.png`}
            alt={imageUrl}
            className={`${className} relative`}
            width={101}
            height={100}
        />
    );
}

export default AvatarImage;