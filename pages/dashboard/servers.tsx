import { NextPage } from "next";
import ServerCard from "../../components/ServerCard";

const Servers: NextPage = () => {
    const servers: string[] = ['Test'];

    return (
        <div className='mx-auto flex flex-col px-8 max-w-6xl gap-y-8'>
            <div className='mt-16 h-16 bg-surface rounded-md'>
                Billboard Message
            </div>
            <div className="mt-8">
                <div className='flex'>
                    <p className='text-3xl mb-5 flex-grow'>Servers</p>
                    <button className='w-28 h-10 text-white bg-primary rounded-lg'>Add Server</button>
                </div>
                <div className='flex flex-col gap-y-3'>
                    {servers.map(name => 
                        <ServerCard title={name} icon='/sign.svg' />
                    )}

                    {servers.length == 0 &&
                        <div className='flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg h-16'>
                            <p className='text-gray-300'>You have no servers. Add one!</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Servers;