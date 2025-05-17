import ServerSelector from "@/components/ServerSelector";
import MinimalNavItem from "@/components/navigation/MinimalNavItem";
import { MdOutlineBuild, MdOutlineFolder, MdOutlineSettings, MdOutlineTerminal, MdSettingsBackupRestore } from "react-icons/md";

export default function DashboardLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex flex-col items-center gap-4 pt-6 bg-dark absolute top-14 bottom-0 w-64 text-neutral-300">
                <ServerSelector />
                <MinimalNavItem href="/dashboard/settings" title="Settings" icon={MdOutlineSettings} />
                <MinimalNavItem href="/dashboard/console" title="Console" icon={MdOutlineTerminal} />
                <MinimalNavItem href="/dashboard/addons" title="Add-ons" icon={MdOutlineBuild} />
                <MinimalNavItem href="/dashboard/files" title="File Manager" icon={MdOutlineFolder} />
                <MinimalNavItem href="/dashboard/backups" title="Backups" icon={MdSettingsBackupRestore} />
            </div>
            <div className="ml-64 mt-16">
                {children}
            </div>
        </>
    );
}