import React from 'react';
import Image from "next/image";
import SocialItem from "@/components/social-item";
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="flex pt-8 px-[25px] m-auto justify-between items-center max-w-[1083px] relative">
            <div className="sm:hidden max-w-[95px] w-full">
                <Image width={23} height={17} className="cursor-pointer sm:hidden" src="/images/burger.svg" alt="burger" />
            </div>
            <div className="hidden w-full justify-between mt-[10px] gap-[19px] text-[15px] text-dark font-[350] sm:flex sm:max-w-[145px] sm:mt-0 md:gap-[96px]">
                <Link href="/events">События</Link>
                <Link href="/participants">Участники</Link>
            </div>
            <Link href="/" className=" ">
                <Image width={150} height={48} src="/logo.svg" alt="logo" />
            </Link>
            <div className="flex gap-[13px] sm:gap-[19px]">
                <SocialItem icon="logo_tg" link=""/>
                <SocialItem icon="logo_vk" link=""/>
            </div>
        </header>
    );
};

export default Header;