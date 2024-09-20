import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import logo from '../../assets/img/OptiSun-removebg-preview.png'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Navbar = () => {

    const tl = useRef();

    const [openNav, setOpenNav] = useState(false)
    const handleNavBtn = () => {
        setOpenNav(!openNav)
    }

    useGSAP(() => {
        gsap.timeline()
            .from(".logo", {
                y: -50,
                duration: 0.5,
                opacity: 0
            })
            .from('.pcNav li', {
                y: -50,
                duration: 0.6,
                stagger: 0.2,
                opacity: 0
            })
    })


    return (
        <div className="myNav p-2 bg-slate-900">
            <div className="container flex justify-between items-center" >
                <a className='logo' href="/">
                    <img className='md:h-16 h-12' src={logo} alt="" />
                </a>
                <div>
                    <div className='block md:hidden'>
                        <button onClick={handleNavBtn} className='text-tealColor text-3xl font-bold mt-2'>
                            {openNav ? <IoMdClose /> : <HiMiniBars3CenterLeft />}

                        </button>
                        <ul className={`MobNav absolute right-0 top-16 bg-slate-900 w-1/2 text-center duration-300 pt-2 ${openNav ? 'right-0' : "right-[-50%]"}`}>
                            <li>
                                <Link
                                    to={"hero"}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"about"}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"#review"}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    Review
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"#faq"}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"#contact"}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className='md:flex hidden justify-center items-center pcNav active'>
                        <li>
                            <Link
                                activeClass="active"
                                to={"hero"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={"about"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={"review"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Review
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={"faq"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to={"contact"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;