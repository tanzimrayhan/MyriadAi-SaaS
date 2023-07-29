"use client"

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation'
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    MessageCircle, Image as ImageIcon,
    Video as VideoIcon,
    Music,
    Code,
    Settings
} from 'lucide-react'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const Sidebar = () => {
    const pathname = usePathname()

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            color: "text-sky-500"
        },
        {
            label: "Conversation",
            icon: MessageCircle,
            href: "/conversation",
            color: "text-violet-500"
        },
        {
            label: "Image Generation",
            icon: ImageIcon,
            href: "/image",
            color: "text-red-500"
        },
        {
            label: "Video Generation",
            icon: VideoIcon,
            href: "/video",
            color: "text-yellow-500"
        },
        {
            label: "Music Generation",
            icon: Music,
            href: "/music",
            color: "text-pink-500"
        },
        {
            label: "Code Generation",
            icon: Code,
            href: "/code",
            color: "text-emerald-500"
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },
    ]

    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"}
                    className='flex items-center pl-3 mb-14'
                >
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            fill
                            sizes='large'
                            alt="logo"
                            src="/bot.png"
                        />
                    </div>
                    <h1 className={cn("text-xl font-bold pt-1", montserrat.className)} >
                        Myriad AI
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex text-base items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar