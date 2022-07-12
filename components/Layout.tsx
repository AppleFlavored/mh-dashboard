import Link from "next/link";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <header className='flex sticky h-[55px] shadow-md z-40'>
                    <div className="flex justify-center w-[260px] h-full mr-2">
                        <Link href='/'>
                            <img className='w-[75%] cursor-pointer' src="/minehut.svg" />
                        </Link>
                    </div>
                    <nav className='flex flex-grow'>
                        <Link href='/dashboard'>
                            <div className='flex justify-center items-center px-4 hover:bg-darkgray cursor-pointer'>
                                Servers
                            </div>
                        </Link>
                        <Link href='/market'>
                            <div className='flex justify-center items-center px-4 hover:bg-darkgray cursor-pointer'>
                                Market
                            </div>
                        </Link>
                        <Link href='https://forums.minehut.com/'>
                            <div className='flex justify-center items-center px-4 hover:bg-darkgray cursor-pointer'>
                                Forums
                            </div>
                        </Link>
                    </nav>
                </header>
                <div className='h-full'>
                    {children}
                </div>
            </div>
        </>
    );
}