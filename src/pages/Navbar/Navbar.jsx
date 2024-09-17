import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import logo from '../../assets/img/OptiSun-removebg-preview.png'
import './Navbar.css'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    const handleNavBtn = () => {
        setOpenNav(!openNav)
    }
    return (
        <div className="myNav p-2">
            <div className="container flex justify-between items-center">
                <a className='logo' href="/">
                    <img className='md:h-16 h-12' src={logo} alt="" />
                </a>
                <div>
                    <div className='block md:hidden'>
                        <button onClick={handleNavBtn} className='text-slate-200 border text-2xl font-bold'>
                            {openNav ? <HiMiniBars3CenterLeft /> : <IoMdClose />}

                        </button>
                        <ul className='MobNav absolute right-0 '>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#review">Review</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <ul className='md:flex hidden justify-center items-center pcNav'>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#review">Review</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;