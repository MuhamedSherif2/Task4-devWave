import { useState } from 'react';
import { Link } from 'react-router-dom';
import IMG from '../assets/Logo.png'
import Button from '../ui/Button';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

function Nav() {
    const [openNav, setOpenNav] = useState(false)
    const links = [
        { id: 1, name: 'Home', page: '/' },
        { id: 2, name: 'Services', page: '/services' },
        { id: 3, name: 'Contact', page: '/contact' },
        { id: 4, name: 'Support', page: '/support' },
    ]
    return (
        <nav className='py-5 w-full'>
            <div className='container mx-auto flex items-center justify-between'>
                <img src={IMG} alt="Logo" className='' />
                <ul className='hidden lg:flex gap-7'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <Link to={link.page} className='text-[20px] font-bold'>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button className={'hidden lg:flex py-2 w-[130px] text-[20px]'}>Sign Up</Button>
                <div onClick={() => setOpenNav(!openNav)} className='flex lg:hidden' >
                    {!openNav ?
                        <IoMenu className='cursor-pointer text-2xl' />
                        :
                        <div className='fixed bg-white right-0 top-[70px] h-1/2 p-5 rounded-b-md w-[300px]'>
                            <IoCloseSharp className='text-2xl transition-all duration-300 cursor-pointer hover:text-red-600' />
                            <ul className='flex flex-col items-center gap-7 my-10'>
                                {links.map((link) => (
                                    <li key={link.id}>
                                        <Link to={link.page} className='text-[20px] font-bold'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Button className={'flex mx-auto py-2 w-[130px] text-[20px]'}>Sign Up</Button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}
export default Nav;