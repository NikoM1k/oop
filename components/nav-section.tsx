import React from 'react';
import InfoItem from "@/components/info-item";
import SectionItem from "@/components/section-item";

const NavSection: React.FC= () => {
    const navigations : string[] = ["конференции", "акредитации", "открытые сертификации", "открытые сертификации", "общие сборы", "протоколы сборов", "новости сайта", "календарь событий", "сайт мги", "вопросы и ответы"]
    return (
        <div className="flex-col w-full max-w-[1083px] px-[25px] flex gap-[53px] items-end m-auto md:flex-row">
            <div className="flex justify-center md:justify-start md:max-w-[645px] flex-wrap gap-x-[15px] gap-y-[12px]">
                {navigations.map((nav, index) => {
                  return <InfoItem name={nav} key={index} variable="lg" />
                })}
            </div>
            <div className="flex gap-[19px] m-auto">
                <SectionItem name="Книги" />
                <SectionItem name="лекции" />
            </div>
        </div>
    );
}

export default NavSection