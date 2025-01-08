import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    image?: string;
}

const EventCard: React.FC<Props> = ({title, description, image}) => {
    return (
        <Link href="events/event" className="border-[1px] border-white rounded-[6px] bg-darkGrey px-[13.5px] pt-[12px] pb-[35px] text-black">
            {image ? <Image src={image} alt='image' width={288} height={177} /> :
                <span className="flex w-[288px] h-[177px] bg-white"/>
            }
            <h5 className="max-w-[267px] font-[500] text-[16px] leading-[18px] mt-[30px] mb-[8px] line-clamp-3 text-ellipsis">{title}</h5>
            <p className="max-w-[267px] text-[15px] leading-[17px] line-clamp-3 text-ellipsis">{description}</p>
        </Link>
    );
}

export default EventCard;