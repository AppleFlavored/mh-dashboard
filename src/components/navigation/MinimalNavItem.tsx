import { IconType } from "react-icons";

export interface MinimalNavItemProps {
    title: string,
    icon: IconType,
    href: string,
    active?: boolean,
}

export default function MinimalNavItem(props: MinimalNavItemProps) {
    const baseClasses = "flex items-center justify-center w-full h-8"
    const activeClasses = "border-r-2 border-white text-white font-semibold";
    
    return (
        <div className={props.active ? `${baseClasses} ${activeClasses}` : baseClasses}>
            <a href={props.href} className="flex items-center gap-2 p-2 rounded-lg w-60 hover:bg-light transition-colors">
                {props.icon.apply(null, [{ className: "fill-neutral-400 w-5 h-5" }])} {props.title}
            </a>
        </div>
    );
}