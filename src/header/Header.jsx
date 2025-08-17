import logo from '../assets/images/logo.png'
import coin from '../assets/images/coin.png'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';
const Header = ({ coins }) => {
    const [menu, setMenu] = useState(true)
    const toggleMenu = active => {
        setMenu(active)
    }
    return (
        <div>
            <div className='max-w-7xl flex justify-between items-center'>
                <a href="#"><img className='w-16' src={logo} alt="" /></a>
                <div className='flex items-center gap-6'>
                    <ul id='toggleMenu' className={`md:flex gap-7 text-gray-600 ${menu === true ? 'hidden' : ''}`}>
                        <li><a className='hover:text-lime-400' href="">Home</a></li>
                        <li><a className='hover:text-lime-400' href="">Fixtures</a></li>
                        <li><a className='hover:text-lime-400' href="">Teams</a></li>
                        <li><a className='hover:text-lime-400' href="">Schedules</a></li>
                    </ul>
                    <HiOutlineMenuAlt1 onClick={() => toggleMenu(!menu)} className='cursor-pointer md:hidden' />
                    <div className='items-center rounded-lg font-semibold flex gap-3 border px-2 py-3'>
                        <span>{coins} Coin</span><img className='w-5' src={coin} alt="coin" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;