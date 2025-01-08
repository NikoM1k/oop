"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumbs: React.FC = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const correctName = {
        events: "мероприятия сообщества",
        event: "базовая программа подготовки гештальт-терапевтов - добор",
        participants: "участники",
        id: "кириллов кирилл кириллович"
    }

    return(
        <nav className="max-w-[1032px] mx-auto">
            <ol className="flex text-middleGrey font-[350] my-[50px]">
                <li>
                    <Link href="/">главная</Link>
                </li>
                {pathSegments.map((segment, index) => {
                    const href = '/' + pathSegments.slice(0, index + 1).join('/');
                    return (
                        <li key={href}>
                            <Link href={href}><span className="mx-[2px]">/</span>{correctName[decodeURIComponent(segment) as keyof typeof correctName]}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;