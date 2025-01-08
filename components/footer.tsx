import React from 'react';
import Image from "next/image";
import SocialItem from "@/components/social-item";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="container pb-8 px-8 m-auto flex justify-center mt-[80px]">
            <a href="/public">
                <Image width={150} height={48} src="/logo.svg" alt="logo"/>
            </a>
            <div className="flex gap-[96px] text-[15px] text-dark ml-[108px] mr-[188px] items-center font-[350]">
                <Link  href="/events">События</Link>
                <Link href="/participants">Участники</Link>
            </div>
            <div className="flex gap-[25px]">
                <Image width={83} height={21} src="/images/oppgp.svg" alt="oop"/>
                <Image width={96} height={27} src="/images/pmg.svg" alt="pmg"/>
            </div>
            <div className="flex ml-[49px] gap-[29px]">
                <SocialItem icon="logo_tg" link=""/>
                <SocialItem icon="logo_vk" link=""/>
            </div>
        </footer>
    );
}

export default Footer;