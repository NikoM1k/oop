import Breadcrumbs from "@/components/breadcrumb";
import InfoBlock from "@/components/info-block";
import NavSection from "@/components/nav-section";
import InfoItem from "@/components/info-item";
import Image from "next/image";
import SocialItem from "@/components/social-item";

export default function Page() {
    return(
        <main>
            <Breadcrumbs/>
            <div className=" flex gap-[35px] max-w-[1032px] m-auto">
                <div className="bg-white p-[15px] w-fit">
                   <Image className="rotate-[180deg]" src="/images/mok_human.svg" alt="human" width={335} height={355} />
                </div>
                <div className="flex flex-col">
                    <h2 className="uppercase max-w-[390px] text-[40px] leading-[48px]">кириллов кирилл кириллович</h2>
                    <div className="flex gap-[17px] mt-[8px] mb-[25px]">
                        <Image src="/images/location.svg" alt="location" width={18} height={22} />
                        <span className="text-lightBlack text-[18px]">Донецк</span>
                    </div>
                    <div className="flex flex-col gap-[8px] mb-[23px]">
                        <span className="text-blue text-[16px]">Статус в сообществе:</span>
                        <div className="flex gap-[13px]">
                            <InfoItem name="Терапевт" variable="whiteFixed" />
                            <InfoItem name="Супервизор" variable="whiteFixed" />
                            <InfoItem name="Тренер" variable="whiteFixed" />
                        </div>
                    </div>
                    <div className="py-[47.5px] px-[53px] gap-[52px] bg-white text-[20px] flex rounded-[12px] relative">
                        <div className="flex gap-[13px]">
                            <Image src="/images/phone.svg" alt="phone" width={18} height={18}/>
                            <span>+7 949 185 65 65 </span>
                        </div>
                        <div className="flex gap-[13px]">
                            <Image src="/images/mail.svg" alt="phone" width={18} height={18}/>
                            <span>Luchayapochta@mail.ru</span>
                        </div>
                        <div className="flex absolute min-w-[47px] h-[47px] bg-white items-center justify-center rounded-full right-[-25px] top-[38px]">
                            <SocialItem icon="logo_tg" link="/" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col rounded-[6px] border-[1px] border-white max-w-[1032px] m-auto pt-[41px] px-[34px] pb-[30px] gap-[12px] mb-[50px] mt-[36px]">
            <h3 className="uppercase text-[26px]">Специализация</h3>
                <div className="flex text-[15px] leading-[25px] gap-[63px]">
                    <ul className="list-disc list-inside">
                        <li>Индивидуальная терапия</li>
                        <li>Терапия зависимостей</li>
                        <li>Семейная терапия</li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <li>Работа с парами</li>
                        <li>Работа с группой</li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <li>Телесно-ориентированная терапия и психосоматика</li>
                        <li>Философия практики</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[30px] max-w-[910px] m-auto mb-[100px]">
                <h3 className="uppercase text-black text-[26px]">Описание профессиональной деятельности</h3>
                <div className="text-[15px] leading-[24px]">
                    <p>Часто обращаются со следующими темами:</p>
                    <ul className="list-none list-inside">
                        <li className="before:content-['—'] before:mr-2">Трудности в создании серьезных отношений,
                            любовная зависимость, взаимоотношения в семье (с
                            родителями, детьми или супругом)
                        </li>
                        <li className="before:content-['—'] before:mr-2">Обретение уверенности в личных и профессиональных отношениях</li>
                        <li className="before:content-['—'] before:mr-2">Выход из депрессивных состояний и обретение вкуса жизни</li>
                        <li className="before:content-['—'] before:mr-2">Поиск себя и возрастные кризисы</li>
                    </ul>
                    <p>
                        Также работаю с психологической компонентой психосоматических расстройств.
                        Возможность работы с иными темами мы можем обговорить по телефону.
                    </p>
                    <p>
                        Обо мне:<br/>
                        Мне 41 год. Люблю впечатляться красотами природы, вкусно поесть, регулярно получаю удовольствие
                        от своей работы.
                        Радуюсь, когда вижу изменения в качестве жизни моих клиентов. Много вкладываюсь в свое
                        личностное,
                        профессиональное и духовное развитие.
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