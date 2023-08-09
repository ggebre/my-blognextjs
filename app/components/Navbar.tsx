import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div >
                <Link href="/"
                    className='text-white/90 no-underline hover:text-white' >
                        Getu
                    </Link>
            </div>
        </nav>
    )
}