import { PencilIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export interface ServerCardProps {
    title: string;
    icon: string;
}

export default function ServerCard({ title, icon }: ServerCardProps) {
    return (
        <div className='flex items-center justify-center px-4 bg-surface rounded-lg h-16'>
            <img src={icon}></img>
            <p className='flex-grow pl-4 text-lg'>{title}</p>
            <Link href='/dashboard/overview'>
                <div className='flex justify-center items-center rounded-lg w-9 h-9 cursor-pointer'>
                    <PencilIcon className='w-6 h-6' />
                </div>
            </Link>
        </div>
    );
}