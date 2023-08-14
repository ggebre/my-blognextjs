import Link from 'next/link';
import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div >
                <h1 className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
                <Link href="/"
                    className='text-white/90 no-underline hover:text-white' >
                        Getu
                    </Link>
                </h1>
                <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
                    <Link className='text-white/90 hover:text-white' href="https://www.youtube.com" >
                        <FaYoutube />
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="https://www.youtube.com" >
                        <FaLaptop />
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="https://www.youtube.com" >
                        <FaGithub />
                    </Link>
                    <Link className='text-white/90 hover:text-white' href="https://www.youtube.com" >
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}