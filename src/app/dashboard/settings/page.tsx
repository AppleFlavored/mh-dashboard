export default function ServerSettings() {
    return (
        <main className="container mx-auto max-w-5xl text-white">
            <h1 className="font-semibold text-3xl mb-4">Settings</h1>
            <div className="bg-dark rounded p-2">
                <div className="flex items-center gap-4">
                    <img src="/sign.svg" className="bg-darker rounded border border-light p-2" />
                    <p className="text-neutral-300">Server Name</p>
                    <span className="badge">Offline</span>
                    <button className="font-medium text-neutral-300 bg-primary rounded p-2">Activate Server</button>
                </div>
            </div>
        </main>
    );
}
