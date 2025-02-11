import Image from "next/image";
import AvatarImage from "@/components/avatar-image";
import Select from "@/components/select";
import Button from "@/components/button";
import EventCard from "@/components/event-card";
import HumanCard from "@/components/human-card";
import NavSection from "@/components/nav-section";
import React from "react";

export default function Home() {

    interface EventCard {
        title: string;
        description: string;
    }

    interface HumanCard {
        name: string;
        description: string;
        skills: string[];
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
    ]

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
        }
    ]
  return (
      <main className="pt-[60px] sm:pt-[100px] flex flex-col">
          <div className="flex flex-col container m-auto text-center text-dark gap-[31px]">
              <h1 className="text-[35px] sm:text-[40px] uppercase">Донецкое гештальт сообщество</h1>
              <p className="text-[17px] text-dark sm:text-[19px] max-w-[832px] mx-auto">это добровольное самоорганизующееся сообщество
                  специалистов г. Донецка и Донецкого края в области психологического консультирования и
                  гештальт-терапии.</p>
          </div>
          <div className="mt-[50px] w-full flex-col flex lg:flex-row justify-center sm:mt-[100px] gap-y-[30px] sm:gap-[14px] max-w-[1083px] px-[25px] mx-auto">
              <div
                  className="relative bg-blue border-[1px] border-white rounded-[25px] px-[25px] pb-[10px] md:pb-[0] md:pr-[48px] md:pl-[0] md:min-w-[650px] min-h-[480px] w-full font-[400]">
                  <Image src="/images/intro.svg" alt="intro" className="w-[262px] h-[262px] sm:w-auto sm:h-auto scale-x-flip right-0 md:left-0 md:scale-x-100 absolute" width={1} height={1}/>
                  <h3 className="text-white text-[38px] text-start mt-[214px] md:text-end leading-[41px]">
                      <span className="bg-darkBlue px-[12px] py-[3px] rounded-[18px]">Цель</span> нашего<br/>объединения:
                  </h3>
                  <p className="md:ml-auto text-[16px] mt-[50px] text-start text-white md:text-[18px] leading-[20px] max-w-[400px] font-[700]">
                      взаимное обогащение профессиональными знаниями, идеями и опытом на конференциях и семинарах, в учебных
                      программах и на интенсивах, на специализациях и в супервизорских группах.</p>
              </div>
              <div className="flex-col md:flex-row min-w-full lg:min-w-min lg:flex-col flex gap-[12px] max-w-[368px]">
                  <div className="flex px-[20px] items-center bg-blue rounded-[25px] min-h-[234px] lg:px-[68px] py-[60px] relative">
                      <p className="text-white font-[500] leading-[23px] text-[20px]">Через собственное развитие мы
                          развиваем и популяризируем гештальт-подход</p>
                      <Image src="/images/palm.svg" alt="palm" className="w-auto h-auto absolute right-3 bottom-0"
                             width={1} height={1}/>
                  </div>
                  <div
                      className="flex justify-center sm:justify-normal px-[20px] flex-col items-center rounded-[25px] min-h-[234px] lg:px-[68px] pt-[40px] border-[4px] border-white relative">
                      <div className="w-full   lg:left-[-20px] flex relative justify-center md:justify-normal">
                          <AvatarImage imageUrl='avatar' className="right-[-85px] md:right-0"/>
                          <AvatarImage imageUrl='avatar' className="right-[-30px] md:right-[55px] z-2"/>
                          <AvatarImage imageUrl='avatar' className="right-[30px] md:right-[105px] z-3"/>
                          <AvatarImage imageUrl='avatar' className="right-[85px] md:right-[155px] z-4"/>
                      </div>
                      <p className="text-blue font-[900] text-[26px]">+ 145 учасников</p>
                  </div>
              </div>
          </div>
          <div className="mt-[50px] flex-col sm:flex-row flex gap-[64px] justify-center container mx-auto">
              <div className="flex-col flex gap-[35px] items-center">
                  <Image src="images/oppgp.svg" alt="oppgp" width={140} height={37}/>
                  <p className="text-grey max-w-[300px] text-[16px] leading-[17px] text-center font-[700]">Донецкое
                      гештальт-сообщество является частью Всероссийского общества психологов практикующих
                      гештальт-подход (ОПП ГП). </p>
              </div>
              <div className="flex-col flex gap-[19px] items-center">
                  <Image src="images/pmg.svg" alt="oppgp" width={177} height={53}/>
                  <p className="text-grey max-w-[507px] text-[16px] leading-[17px] text-center font-[700]">В своей работе мы придерживаемся стандартов программы «Московский Гештальт Институт», а также стандартов Европейской Ассоциации Гештальт Терапии, Этического Кодекса Гештальт Терапевта и принципов гуманизма.</p>
              </div>
          </div>
          <div className="flex flex-col mt-[100px]">
              <div className="flex flex-col gap-[10px] md:flex-row items-center lg: max-w-[1083px] px-[25px] mx-auto justify-between w-full mb-[50px]">
                  <Select className="order-2 md:order-1" name="Конференции" />
                  <h3 className="mb-[50px] md:mb-0 order-1 md:order-2 text-blac text-center text-[26px] uppercase">Мероприятия сообщества</h3>
                  <Button className="hidden md:flex order-3" name="Все мероприятия" />
              </div>
              <div className="flex justify-around flex-wrap gap-y-[10px]">
                  {eventCards.map((card, index) => {
                      return <EventCard title={card.title} description={card.description} key={index} />
                  })}
              </div>
          </div>
          <Button className="min-w-[315px] mt-[50px] m-auto md:hidden" name="Все мероприятия" />
          <div className="flex flex-col mt-[90px] mb-[80px] gap-[56px]">
              <div className="flex flex-col md:flex-row items-center px-[25px] max-w-[1083px] mx-auto justify-between w-full">
                  <Select className="order-2 md:order-1" name="Тренер"/>
                  <div className="flex mb-[50px] order-1 md:order-2 md:mb-0">
                      <Image className="rotate-[90deg] relative top-[-2px]" src="/images/chevronDown.svg" alt="arrow" width={11} height={11} />
                      <h3 className=" text-black text-center text-[26px] uppercase mx-[23px]">наше сообщество</h3>
                      <Image className="rotate-[-90deg] relative top-[-2px]" src="/images/chevronDown.svg" alt="arrow" width={11} height={11} />
                  </div>
                  <Button className="hidden md:order-3 md:flex" name="Все участники"/>
              </div>
              <div className="flex m-auto justify-center gap-[16px] w-full px-[25px] flex-wrap">
                  {humans.map((human, index) => {
                      return <HumanCard key={index} name={human.name} description={human.description} skills={human.skills} />
                  })}
              </div>
              <Button className="min-w-[315px] mt-[50px] m-auto md:hidden" name="Все участники"/>
          </div>
          <NavSection />
      </main>
  );
}
