function Page() {
    return (
        <div className="col-span-3 row-span-4 overflow-auto p-4 bg-gradient-to-r from-purple-500 to-pink-500">
            <div>
                <p className="p-4 bg-slate-200 hover:bg-gradient-to-r hover:from-slate-200 hover:to-slate-400 transition-all">Creator: <span className="p-1 rounded text-red-700 text-md border border-current font-bold">Alex Romanov</span></p>
            </div>
        </div>
    )
}

export default Page
