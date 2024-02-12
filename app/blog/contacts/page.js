function Page() {
    const styleForInfoPiece = "text-sky-400 p-1 bg-sky-100 hover:bg-sky-200 hover:text-sky-500 transition rounded-md"
    
    return (
        <div className="col-span-3 row-span-4 overflow-auto p-4 bg-gradient-to-r from-pink-500 to-amber-500">
            <div>
                <p className="mb-3 text-white">Phone: <span className={styleForInfoPiece}>89269393457</span><span className="font-bold text-xl">,    </span><span className={styleForInfoPiece}>+79269393457</span></p>
                <p className="mb-3 text-white">Mail: <span className={`${styleForInfoPiece} font-bold`}>magmafellow@gmail.com</span></p>
                <p className="text-white">Location: <span className="text-sky-300 bg-sky-600 p-1 rounded hover:text-amber-600 hover:bg-amber-300 transition">Moscow</span></p>
            </div>
        </div>
    )
}

export default Page
