import { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
    return (
        <aside className='bg-darkgray border-r border-[#3c3c43] fixed flex flex-col items-center w-[260px] h-full'>
            {children}
        </aside>
    );
}