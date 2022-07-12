import { ExclamationIcon, ExternalLinkIcon, SparklesIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import Link from "next/link";
import DashboardLayout from "../../components/DashboardLayout";

const Overview: NextPage = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col mx-auto px-8 max-w-5xl gap-y-8'>
                <div className='flex mt-16 items-center w-full'>
                    <div className='flex items-center justify-center w-[48px] h-[48px] bg-surface rounded-lg'>
                        <img src='/sign.svg'></img>
                    </div>
                    <span className='ml-4 text-3xl flex-grow truncate'>Server Name</span>
                    <div className='flex gap-x-3'>
                        <button className='w-28 h-10 text-white bg-red-500 rounded-lg'>Restart</button>
                        <button className='w-28 h-10 text-white bg-red-500 rounded-lg'>Stop Server</button>
                    </div>
                </div>
                <div className='w-full gap-6 grid grid-cols-4 grid-flow-col'>
                    <div>
                        <div className='flex items-center mb-2'>
                            <p className='flex-grow'>Server Plan</p>
                            <Link href='/'>
                                <p className='text-sm font-semibold text-primary cursor-pointer'>View Plans</p>
                            </Link>
                        </div>
                        <div className='flex flex-col h-28 bg-surface rounded-lg'>
                            <div className='flex items-center h-[70%] text-3xl border-b-[1px] border-[#3c3c43]'>
                                <span className='mx-3'>{'MH20'}</span>
                            </div>
                            <div className='flex items-center h-2/6 mx-2'>
                                <ExclamationIcon className='w-6 h-6 mr-1 text-yellow-600' />
                                <span className='flex-grow text-yellow-600 text-sm font-bold'>Insufficient credits!</span>
                                <ExternalLinkIcon className='w-6 h-6 text-[#737373]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center mb-2'>
                            <p className='flex-grow'>Players</p>
                        </div>
                        <div className='flex flex-col h-28 bg-surface rounded-lg'>
                            <div className='flex items-center h-[70%] text-3xl border-b-[1px] border-[#3c3c43]'>
                                <span className='mx-3'>{0}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='flex items-center mb-2'>
                            <p className='flex-grow'>Server Software</p>
                        </div>
                        <div className='flex flex-col h-28 bg-surface rounded-lg'>
                            <div className='flex items-center h-[70%] text-3xl border-b-[1px] border-[#3c3c43]'>
                                <span className='mx-3'>{'Paper 1.17.1'}</span>
                            </div>
                            <div className='flex items-center h-2/6 mx-2'>
                                <SparklesIcon className='w-6 h-6 mr-1 text-blue-400' />
                                <span className='flex-grow text-blue-400 text-sm font-semibold'>New version available!</span>
                                <ExternalLinkIcon className='w-6 h-6 text-[#737373]' />
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className='flex items-center mb-2'>
                            <p className='flex-grow'>RAM</p>
                        </div>
                        <div className='flex flex-col h-28 bg-surface rounded-lg'>
                            <div className='flex items-center h-[70%] text-3xl border-b-[1px] border-[#3c3c43]'>
                                <span className='mx-3'>{'1024 MB'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Overview;