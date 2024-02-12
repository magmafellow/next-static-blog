'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx'

const links = [
    {
        url: '/blog',
        text: 'Home'
    },
    {
        url: '/blog/person',
        text: 'Person'
    },
    {
        url: '/blog/contacts',
        text: 'Contacts'
    }
]

export default function Header({ className }) {
    const pathname = usePathname()
    
    return (
        <header className={`${className} flex justify-between items-center px-8`}>
            <a href="/blog" className="p-8 rounded-full border-4 text-8xl hover:bg-orange-400 hover:text-orange-800 hover:border-orange-200 transition">M</a>
            <ul className="flex grow justify-around">
                {links.map((link) => <li key={link.url} className=""><Link href={link.url} className={clsx("py-2 px-14 bg-slate-700 text-white rounded-xl hover:bg-slate-500", {'bg-stone-400': link.url === pathname})}>{link.text}</Link></li>)}
            </ul>
        </header>
    )
}