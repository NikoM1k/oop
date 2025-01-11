import Breadcrumbs from "@/components/breadcrumb";
import InfoBlock from "@/components/info-block";
import NavSection from "@/components/nav-section";
import InfoItem from "@/components/info-item";
import HumanCard from "@/components/human-card";
import SocialItem from "@/components/social-item";

export async function generateStaticParams() {
    // Моканные данные мероприятий
    const events = [
        { slug: 'event-1' },
        { slug: 'event-2' },
        { slug: 'event-3' },
    ];

    return events.map(event => ({
        slug: event.slug,
    }));
}

export default function Page() {
    const infoItems = [
        {
            name: "Базовый курс"
        },
        {
            name: "600ч",
            img: "clock"
        },
        {
            name: "11.01.2025 - 11.11.2028",
            img: "date"
        },
        {
            name: "Донецк",
            img: "location"
        }
    ]

    const humanCards = [
        {
            name: "Мамченко Анжелика Анатольевна",
            post: "Руководитель программы",
            skills: ["Терапевт", "Супервизор", "Тренер", "Ассоциированный тренер", "Тренер-стажер", "Ведущий тренер"]
        },
        {
            name: "Мамченко Анжелика Анатольевна",
            post: "Руководитель программы",
            skills: ["Терапевт", "Супервизор", "Тренер", "Ассоциированный тренер", "Тренер-стажер", "Ведущий тренер"]
        }
    ]

    return(
        <main>
            <Breadcrumbs/>
            <div className="bg-blue rounded-[6px] max-w-[1032px] m-auto mb-[30px] py-[45px] px-[100px]">
                <p className="text-white text-[48px] text-center uppercase leading-[48px]">Базовая программа подготовки гештальт-терапевтов — добор</p>
            </div>
            <div className="flex flex-col m-auto max-w-[1032px] gap-[50px] mb-[80px]">
                <div className="flex gap-[23px]">
                    {infoItems.map((item, index) => {
                        return <InfoItem variable="secondary" name={item.name} pathImg={item?.img} key={index}/>
                    })}
                </div>
                <div className="flex gap-[18px]">
                    {humanCards.map((card, index) => {
                        return <HumanCard name={card.name} post={card.post} skills={card.skills} key={index}
                                          variant="secondary"/>
                    })}
                </div>
                <div className="flex gap-[21px]">
                    <div
                        className="flex flex-col border-white border-[1px] rounded-[6px] min-w-[780px] h-[200px] px-[32px] justify-center gap-[12px]">
                        <h4 className="text-black text-[26px] uppercase">формат мероприятия</h4>
                        <p className="text-black text-[15px] max-w-[640px]">Встречи проходят очно в формате двухдневок:
                            суббота, воскресенье раз в 1,5 - 2,5 месяца. Формы работы - групповые встречи, включающие
                            лекции, упражнения, групповую динамику, игры, эксперименты, арт-терапию, психодраму, личные
                            сессии в кругу, обсуждения и т.д.</p>
                    </div>
                    <div
                        className="flex flex-col bg-white rounded-[12px] pt-[47px] pb-[34px] w-full pl-[32px] gap-[23px] relative">
                        <div className="flex-col flex text-[18px]">
                            <span>+7 949 185 65 65 </span>
                            <span>+7 949 185 65 65 </span>
                        </div>
                        <div className="flex-col flex text-[15px]">
                            <span>Luchayapochta@mail.ru</span>
                            <span>Luchayapochta@mail.ru</span>
                        </div>
                        <div
                            className="absolute bg-white w-[47px] h-[47px] flex rounded-full items-center justify-center top-[-20px]">
                            <SocialItem icon="logo_tg" link="/"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] max-w-[910px] m-auto">
                    <h3 className="uppercase text-black text-[26px]">содержание</h3>
                    <p className="text-[15px] leading-[24px]">
                        ОСНОВНЫЕ ТЕМЫ: 1. Основы гештальт-терапии. Исторические корни, основоположники гештальт-терапии,
                        современный гештальт-подход, литература. Основные понятия и принципы гештальт-терапии
                        (поле — организм-среда, феноменологический подход в гештальт-терапии, диалог, осознавание,
                        фигура и фон, контакт, граница контакта, цикл опыта, творческое приспособление). 2. Теория поля
                        в гештальт-терапии. Теория и функции self. Динамика self. Формы прерывания контакта. 3.
                        Творческие
                        методы в гештальт-терапии. Работа с внутренней феноменологией клиента. Теория парадоксальных
                        изменений.
                        Работа с полярностями. Арт-терапия, работа с рисунком, метафорами, сновидениями. Модальности
                        контакта. 4.
                        Гештальт и телесно-ориентированный подход. 5. Философия гештальт-подхода и методология практики.
                        Терапевтическая позиция. Терапевтические отношения, перенос и контр-перенос. Основные стратегии
                        работы гештальт-терапевта. Работа на границе контакта. Процесс-анализ терапевтической сессии.
                        6. Теории развития. Развитие ребенка. Гештальт-терапия с детьми и родителями. Семейная
                        гештальт-терапия.
                        7. Кризис и травма. 8. Гештальт-терапия в клинической практике. Здоровье и болезнь. Принципы
                        клинической диагностики в гештальт-терапии. Динамическая концепция личности в гештальт-терапии.
                        9. Гештальт-подход в работе с психосоматикой. 10. Гештальт-подход в работе с группами. Феномены
                        поля в групповой динамике. Гештальт и системный подход. Работа с парами, малыми системами.
                        Терапевтическое сообщество. Организационное гештальт-консультирование. 11. Принципы и приложения
                        этики
                    </p>
                </div>
                <div className="flex flex-col gap-[30px] max-w-[910px] m-auto">
                    <h3 className="uppercase text-black text-[26px]">Дополнительная информация</h3>
                    <p className="text-[15px] leading-[24px]">
                        Ведущие программы:<br/>Анжелика Мамченко - тренер, супервизор, гештальт терапевт,
                        клинический психолог, ведущая базовых программ, супервизорских, терапевтических групп и
                        специализаций «Гештальт подход в работе с психосоматикой», «Гештальт терапия в клинической
                        практике»<br/>Софья Пушкарева – психолог, супервизор, гештальт терапевт, ведущая терапевтических
                        и супервизорских групп <br/>Руководитель программы – Анжелика Мамченко. <br/>Запись на онлайн
                        знакомство по телефону: Софья Пушкарева <span className="text-blue underline">+7 9265968715</span>, WhatsApp,Telegram,
                        почта <span className="text-blue underline">sida786@mail.ru</span> <br/>Запись в программу после онлайн знакомства.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-[80px]">
                <InfoBlock/>
                <NavSection/>
            </div>
        </main>
    )
}