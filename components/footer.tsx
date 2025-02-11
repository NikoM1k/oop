import React from 'react';
import Image from "next/image";
import SocialItem from "@/components/social-item";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center mt-[20px] md:flex-row md:mt-[80px] max-w-[1083px] px-[25px] justify-between pb-8  m-auto">
            <a href="/public">
                <Image width={150} height={48} src="/logo.svg" alt="logo"/>
            </a>
            <div className="max-w-[500px] mt-[40px] md:mt-0 w-full justify-between md:w-fit gap-[25px] lg:gap-[96px] flex text-[15px] text-dark items-center font-[350]">
                <div className="flex gap-[28px]">
                    <Link  href="/events">События</Link>
                    <Link href="/participants">Участники</Link>
                </div>
                <div className="flex gap-[28px] md:hidden">
                    <SocialItem icon="logo_tg" link=""/>
                    <SocialItem icon="logo_vk" link=""/>
                </div>
            </div>
            <div className="max-w-[500px] w-full justify-between mt-[70px] md:mt-0 md:w-fit flex gap-[25px]">
                <Image width={83} height={21} src="/images/oppgp.svg" alt="oop"/>
                <Image width={96} height={27} src="/images/pmg.svg" alt="pmg"/>
            </div>
            <div className="max-w-[500px] w-full justify-center hidden md:w-fit md:flex gap-[29px]">
                <SocialItem icon="logo_tg" link=""/>
                <SocialItem icon="logo_vk" link=""/>
            </div>
        </footer>
    );
}

export default Footer;