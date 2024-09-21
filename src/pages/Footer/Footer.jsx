import React from 'react';
import logo from '../../assets/img/OptiSun.png'
import { Link } from 'react-scroll';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import './Footer.css'

const Footer = () => {
    return (
        <div className='py-10 px-2'>
            <div className="container">
                <div className='flex flex-col gap-5 md:flex-row justify-center items-stretch'>
                    <div className='w-full md:w-1/2'>
                        <img className='w-56' src={logo} alt="" />
                        <p className='text-slate-300 w-full max-w-sm font-thin text-xl py-7'>
                            At SunglassShop, we're dedicated to bringing you the latest in eyewear trends with top-notch quality. Whether you're looking for classic styles or something trendy, we've got you covered.

                        </p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-5 '>
                        <div className='w-full md:w-1/2'>
                            <h4 className='text-3xl font-bold font-mySubTitle text-pinkColor'>Customer Support</h4>
                            <ul className='text-slate-300 space-y-2 mt-5'>
                                <li><Link className='cursor-pointer' to='faq'>FAQs</Link></li>
                                <li><Link to='/'>Shipping & Returns</Link></li>
                                <li><Link to='/'>Privacy Policy</Link></li>
                                <li><Link to='/'>Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <h4 className='text-3xl font-bold font-mySubTitle text-pinkColor'>Follow Us</h4>
                            <ul className='text-slate-300 space-y-2 mt-5'>
                                <li>
                                    <a className='socialIcon flex gap-3 items-center' href="" target='_blank'>
                                        <div className="inner">
                                            <FaFacebookF />
                                        </div>
                                        <p className='text-xl'>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a className='socialIcon flex gap-3 items-center' href="" target='_blank'>
                                        <div className="inner">
                                            <FaInstagram />
                                        </div>
                                        <p className='text-xl'>Instagram</p>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='border-tealColor' />
                <div>
                    <p className='text-slate-300 text-center font-thin text-xl'>© 2024 SunglassShop. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;