import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Sidebar>
                <div className='w-[230px] h-[60px] my-[24px] border border-[#3c3c43] rounded-sm'>
                
                </div>
                <nav className='flex flex-col gap-y-2'>
                    <Link href='/dashboard/overview'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm bg-primary cursor-pointer'>
                            <p>Overview</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/settings'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>Settings</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/settings'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>Console</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/addons'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>Addons</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/files'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>File Manager</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/files'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>World</p>
                        </div>
                    </Link>
                    <Link href='/dashboard/files'>
                        <div className='flex items-center w-[230px] h-[40px] px-3 rounded-sm cursor-pointer hover:bg-[#1f1f23]'>
                            <p>Backups</p>
                        </div>
                    </Link>
                </nav>
            </Sidebar>
            <main className='ml-[260px]'>
                {children}
            </main>
        </>
    );
}