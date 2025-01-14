import React from 'react';
import Image from "next/image";
import InfoItem from "@/components/info-item";
import Link from "next/link";

interface Props {
    name: string;
    description?: string;
    skills: string[];
    post?: string;
    image?: string;
    variant?: 'default' | 'secondary' | 'lg';
}

const HumanCard: React.FC<Props> = ({name, description, image, skills,post, variant = 'default'}) => {
    const cardStyles = {
        default: {
            main: "",
            img: {
                w: 221,
                h: 221
            },
            name: "text-[18px]",
            description: "",
            blocks: ""
        },
        secondary: {
            main: "flex w-full justify-between",
            img: {
                w: 218,
                h: 232
            }
        },
        lg: {
            main: "",
            img: {
                w: 303,
                h: 303
            },
            name: "text-[20px] max-w-full",
            description: "max-w-[300px]",
            blocks: "max-w-[300px]"
        }
    };

    return (
        <Link href="/participants/1" className={`${cardStyles[variant].main} backdrop-blur-custom border-[1px] border-white rounded-[6px] bg-darkWhite p-[10px] text-black w-fit shadow-custom`}>
            {image ? <Image src={image} alt='image' width={cardStyles[variant].img.w} height={cardStyles[variant].img.h} /> :
                <Image src={variant === "secondary" ? "/images/mok_human2.svg" :"/images/mok_human.svg"} alt='image' width={cardStyles[variant].img.w} height={cardStyles[variant].img.h} className="rotate-[180deg]" />
            }
            {(variant === 'default' || variant === 'lg') &&
            <>
                <h5 className={`${cardStyles[variant].name} font-[400] leading-[20px] max-w-[190px] mt-[16px] mb-[20px]`}>{name}</h5>
                <span className={`text-lightGrey`}>
                    Работает с темами
                    <p className={`text-black text-[13px] leading-[15px] line-clamp-3 text-ellipsis max-w-[220px] mb-[16px] ${cardStyles[variant].description}`}>{description}</p>
                </span>
                <div className={`flex gap-[5px] max-w-[220px] flex-wrap ${cardStyles[variant].blocks}`}>
                    {skills.map((skill, index) => {
                        return <InfoItem name={skill} key={index} />
                    })}
                </div>
            </>
            }
            {variant === 'secondary' &&
                <div className="flex flex-col ml-[16px]">
                    <h5 className="font-[400] text-[21px] leading-[25px] max-w-[204px] mt-[8px] mb-[18px]">{name}</h5>
                    <span className="text-[15px] text-lightGrey mb-[12px]">{post}</span>
                    <div className="flex gap-[7px] flex-wrap">
                        {skills.map((skill, index) => {
                            return <InfoItem name={skill} key={index} variable="white"/>
                        })}
                    </div>
                </div>
            }
        </Link>
    );
}

export default HumanCard;