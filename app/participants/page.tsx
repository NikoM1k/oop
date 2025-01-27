"use client";

import Breadcrumbs from "@/components/breadcrumb";
import React, { useState } from "react";
import InfoItem from "@/components/info-item";
import HumanCard from "@/components/human-card";
import Pagination from "@/components/pagination";
import Button from "@/components/button";
import InfoBlock from "@/components/info-block";
import NavSection from "@/components/nav-section";

export default function Page() {
    const skills = ["Терапевт", "Супервизор", "Тренер"]
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 100;
    const itemsPerPage = 10;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    interface HumanCard {
        name: string;
        description: string;
        skills: string[];
    }

    const humans: HumanCard[] = [
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        },
        {
            name: "Лукашенко Марина Анатольевна",
            description: "Финансовые изменения, болезнь, своя или близких, разрыв отношений, развод...",
            skills: ["Терапевт", "Супервизор", "Тренер-стажер", "Тренер", "Ассоциированный тренер", "Ведущий тренер"]
        }
    ]
    return(
        <main>
            <Breadcrumbs/>
            <div className="flex flex-col gap-[31px] items-center mb-[50px] px-[25px]">
                <h1 className="text-[35px] sm:text-[40px] text-center uppercase">участники сообщества</h1>
                <p className="text-[19px] sm:text-[19px] max-w-[832px] text-center">это добровольное самоорганизующееся сообщество специалистов г. Донецка и Донецкого края в области психологического консультирования и гештальт-терапии.</p>
            </div>
            <div className="flex flex-col gap-[50px] px-[25px]">
                <div className="flex flex-wrap gap-[10px] justify-center md:justify-start md:gap-[28px] max-w-[1032px] m-auto w-full">
                    {skills.map((skill, index) => {
                        return <InfoItem name={skill} key={index} variable="lgFixed"/>
                    })}
                </div>
                <div className="flex flex-wrap gap-x-[16px] gap-y-[30px] justify-center max-w-[1350px] m-auto">
                    {humans.map((human, index) => {
                        return <HumanCard key={index} name={human.name} description={human.description}
                                          skills={human.skills}/>
                    })}
                </div>
                <div className="flex-col md:flex-row gap-[50px] max-w-[1033px] m-auto w-full mb-[100px] flex justify-between">
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                    <Button name="Показать всех участников"/>
                </div>
                <div className="flex flex-col gap-[80px]">
                    <InfoBlock/>
                    <NavSection/>
                </div>
            </div>
        </main>
    )
}