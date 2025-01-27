"use client";

import InfoBlock from "@/components/info-block";
import Breadcrumbs from "@/components/breadcrumb";
import Select from "@/components/select";
import FilterCheckbox from "@/components/filterCheckbox";
import EventCard from "@/components/event-card";
import NavSection from "@/components/nav-section";
import Pagination from "@/components/pagination";
import React, { useState } from 'react';
import Button from "@/components/button";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 100;
    const itemsPerPage = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    interface EventCard {
        title: string;
        description: string;
    }

    const eventCards: EventCard[] = [
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        },
        {
            title: "добровольное самоорганизующееся сообщество специалистов ... добровольное самоорганизующееся сообщество специалистов ...",
            description: "добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области..."
        }
    ]

    return (
        <main>
            <Breadcrumbs />
            <div className="flex flex-col gap-[31px] items-center mb-[50px] px-[25px]">
                <h1 className="text-[35px] text-center md:text-[40px] uppercase">Мероприятия сообщества</h1>
                <p className="text-[17px] md:text-[19px] max-w-[832px] text-center">это добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области психологического консультирования и гештальт-терапии.</p>
            </div>
            <div className="flex flex-col max-w-[1083px] px-[25px] m-auto">
                <div className="flex flex-col gap-[30px] items-center md:flex-row md:gap-[84px] mb-[30px]">
                    <Select name="Все мероприятия" variant="secondary" />
                    <FilterCheckbox />
                </div>
                <div className="flex flex-wrap gap-x-[12px] gap-y-[30px] mb-[80px] justify-evenly lg:justify-between">
                    {eventCards.map((card, index) => {
                        return <EventCard title={card.title} description={card.description} key={index} />
                    })}
                </div>
                <div className="mb-[100px] flex justify-between flex-col gap-[50px] md:flex-row">
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                    <Button name="Показать все мероприятия" variant="secondary" />
                </div>
            </div>
            <div className="flex flex-col gap-[80px]">
                <InfoBlock/>
                <NavSection />
            </div>
        </main>
    )
}