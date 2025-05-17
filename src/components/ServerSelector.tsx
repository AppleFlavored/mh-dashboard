"use client";

import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export interface ServerSelectorProps {
    
}

export default function ServerSelector(props: ServerSelectorProps) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <div>
            <div
                className="flex items-center border border-light rounded w-60 h-12 px-2 hover:cursor-pointer"
                onClick={() => setMenuVisible(!menuVisible)}
            >
                <img src="/sign.svg" className="mr-2" />
                <span className="flex-grow text-neutral-300 select-none truncate">Server Name</span>
                { menuVisible ? <BsChevronUp className="fill-neutral-300" /> : <BsChevronDown className="fill-neutral-300" /> }
            </div>
            { menuVisible &&
                <div className="absolute w-60 max-h-80 mt-2 overflow-y-scroll bg-dark rounded border border-light shadow">
                    <div className="flex items-center w-full h-11 px-2 hover:bg-light">
                        <img src="/sign.svg" className="mr-2" />
                        <span className="flex-grow text-neutral-300 select-none">Server Name</span>
                    </div>
                    <div className="flex items-center w-full h-11 px-2 hover:bg-light">
                        <img src="/sign.svg" className="mr-2" />
                        <span className="flex-grow text-neutral-300 select-none">Server Name</span>
                    </div>
                    <div className="flex items-center w-full h-11 px-2 hover:bg-light">
                        <img src="/sign.svg" className="mr-2" />
                        <span className="flex-grow text-neutral-300 select-none">Server Name</span>
                    </div>
                    <div className="flex justify-center w-full my-2">
                        <a href="/create" className="flex justify-center items-center gap-2 bg-primary p-2 rounded">
                            <MdAddCircleOutline className="w-6 h-6" /> Create Server
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}