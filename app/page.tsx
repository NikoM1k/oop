import Image from "next/image";
import AvatarImage from "@/components/avatar-image";
import Select from "@/components/select";
import Button from "@/components/button";
import EventCard from "@/components/event-card";
import HumanCard from "@/components/human-card";
import NavSection from "@/components/nav-section";

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
      <main className="pt-[100px] flex flex-col">
          <div className="flex flex-col container m-auto text-center text-dark gap-[31px]">
              <h1 className="text-[40px] uppercase">Донецкое гештальт сообщество</h1>
              <p className="text-dark text-[19px] max-w-[832px] mx-auto">это добровольное самоорганизующееся сообщество
                  специалистов г. Донецка и Донецкого края в области психологического консультирования и
                  гештальт-терапии.</p>
          </div>
          <div className="flex justify-center mt-[100px] gap-[14px] container mx-auto">
              <div
                  className="relative bg-blue border-[1px] border-white rounded-[25px] pr-[48px] max-w-[650px] min-h-[480px] w-full font-[400]">
                  <Image src="/images/intro.svg" alt="intro" className="w-auto h-auto absolute" width={1} height={1}/>
                  <h3 className="text-white text-[38px] mt-[214px] text-end leading-[41px]">
                      <span className="bg-darkBlue px-[12px] py-[3px] rounded-[18px]">Цель</span> нашего<br/>объединения:
                  </h3>
                  <p className="ml-auto mt-[50px] text-start text-white text-[19px] leading-[20px] max-w-[400px] font-[700]">взаимное
                      обогащение профессиональными знаниями, идеями и опытом на конференциях и семинарах, в учебных
                      программах и на интенсивах, на специализациях и в супервизорских группах.</p>
              </div>
              <div className="flex flex-col gap-[12px] max-w-[368px]">
                  <div className="flex items-center bg-blue rounded-[25px] min-h-[234px] px-[68px] py-[60px] relative">
                      <p className="text-white font-[500] leading-[23px] text-[20px]">Через собственное развитие мы
                          развиваем и популяризируем гештальт-подход</p>
                      <Image src="/images/palm.svg" alt="palm" className="w-auto h-auto absolute right-3 bottom-0"
                             width={1} height={1}/>
                  </div>
                  <div
                      className="flex flex-col items-center rounded-[25px] min-h-[234px] px-[68px] pt-[40px] border-[4px] border-white">
                      <div className="flex relative left-[-20px] bottom-[-10px]">
                          <AvatarImage imageUrl='avatar'/>
                          <AvatarImage imageUrl='avatar' className="right-[55px] z-2"/>
                          <AvatarImage imageUrl='avatar' className="right-[105px] z-3"/>
                          <AvatarImage imageUrl='avatar' className="right-[155px] z-4"/>
                      </div>
                      <p className="text-blue font-[900] text-[26px]">+ 145 учасников</p>
                  </div>
              </div>
          </div>
          <div className="mt-[50px] flex gap-[64px] justify-center container mx-auto">
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
              <div className="flex items-center max-w-[1033px] mx-auto justify-between w-full mb-[50px]">
                  <Select name="Конференции" />
                  <h3 className="text-black text-[26px] uppercase">Мероприятия сообщества</h3>
                  <Button name="Все мероприятия" />
              </div>
              <div className="flex justify-around">
                  {eventCards.map((card, index) => {
                      return <EventCard title={card.title} description={card.description} key={index} />
                  })}
              </div>
          </div>
          <div className="flex flex-col mt-[90px] mb-[80px] gap-[56px]">
              <div className="flex items-center max-w-[1033px] mx-auto justify-between w-full">
                  <Select name="Тренер"/>
                  <h3 className="text-black text-[26px] uppercase">наше сообщество</h3>
                  <Button name="Все участники"/>
              </div>
              <div className="flex max-w-[1033px] m-auto justify-between w-full">
                  {humans.map((human, index) => {
                      return <HumanCard key={index} name={human.name} description={human.description} skills={human.skills} />
                  })}
              </div>
          </div>
          <NavSection />
      </main>
  );
}
