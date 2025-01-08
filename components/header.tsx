import React from 'react';
import Image from "next/image";
import SocialItem from "@/components/social-item";
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex pt-8 px-8 justify-center items-center container m-auto">
            <div className="flex gap-[96px] text-[15px] text-dark mr-[220px] font-[350]">
                <Link href="/events">События</Link>
                <Link href="/participants">Участники</Link>
            </div>
            <Link href="/">
                <Image width={150} height={48} src="/logo.svg" alt="logo" />
            </Link>
            <div className="flex ml-[340px] gap-[19px]">
                <SocialItem icon="logo_tg" link=""/>
                <SocialItem icon="logo_vk" link=""/>
            </div>
        </header>
    );
};

export default Header;