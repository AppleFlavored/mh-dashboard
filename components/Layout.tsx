import React from "react";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <header className='sticky h-[55px] shadow-md z-40'>
                    <div className="flex justify-center w-[260px] h-full">
                        <img className='w-[75%]' src="/minehut.svg" />
                    </div>
                    <nav></nav>
                </header>
                <div className='h-full'>
                    {children}
                </div>
            </div>
        </>
    );
}