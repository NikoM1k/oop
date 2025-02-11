"use client";

import React, { useState, useEffect } from 'react';
import InfoItem from "@/components/info-item";
import HumanCard from "@/components/human-card";

interface InfoItemProps {
    name: string;
    img?: string;
}

interface HumanCardProps {
    name: string;
    post: string;
    skills: string[];
}

interface ClientComponentProps {
    infoItems: InfoItemProps[];
    humanCards: HumanCardProps[];
}

const ClientComponent: React.FC<ClientComponentProps> = ({ infoItems, humanCards }) => {
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLg(window.innerWidth >= 1024);
        };
        // Устанавливаем значение при первом рендере
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="flex gap-[10px] flex-wrap lg:gap-[23px] justify-between lg:justify-start">
                {infoItems.map((item, index) => (
                    <InfoItem key={index} variable="secondary" name={item.name} pathImg={item.img} />
                ))}
            </div>
            <div className="flex justify-center flex-wrap lg:flex-nowrap lg:justify-between gap-[18px]">
                {humanCards.map((card, index) => (
                    <HumanCard
                        key={index}
                        name={card.name}
                        post={card.post}
                        skills={card.skills}
                        variant={isLg ? "secondary" : undefined}
                    />
                ))}
            </div>
        </>
    );
};

export default ClientComponent;