import React, { useRef } from 'react';
import './Contact.css'
import { LuContact2 } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
    const contact = useRef(null)

    useGSAP(() => {

        gsap.from('.contact-con', {
            y: -100,
            scale: 2,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.contact-con',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2,
            },
        }, {scope: contact}),
            gsap.from('.contact-cards .contact-card', {
                scale: 0,
                opacity: 0,
                stagger: 0.6,
                duration: 1,
                x: -100,
                scrollTrigger: {
                    trigger: '.contact-card',
                    start: 'top 90%',
                    end: 'top: 60%',
                    scrub: 2,
                }
            }, {scope: contact}),
            gsap.from('.form-content', {
                x: 100,
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: ".form-content",
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: 2,
                }
            }, {scope: contact})
    })


    return (
        <div className='contact py-16 md:py-20 px-2 overflow-hidden' id='contact' ref={contact}>
            <div className="container">
                <div className='text-center contact-con'>
                    <div className='flex items-center gap-5 justify-center'>
                        <div className='title-box '>
                            <LuContact2 className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>CONTACT US</p>
                    </div>
                    <h2 className=" text-4xl font-myTitle font-bold text-slate-100 py-5">
                        Get in Touch with Us
                    </h2>
                </div>

                <div className='flex flex-col md:flex-row mt-10 justify-center items-center gap-5 md:gap-10 w-full max-w-5xl mx-auto'>

                    <div className='w-full md:w-1/2'>
                        <div className='form-content'>
                            <form className="formBody">
                                <div className="form-control py-3">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold text-pinkColor">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="full name" required />
                                </div>
                                <div className="form-control py-3">
                                    <label className="label">
                                        <span className="label-text text-pinkColor font-bold text-xl">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="email" required />
                                </div>

                                <div className="form-control py-3">
                                    <label className="label">
                                        <span className="label-text text-pinkColor font-bold text-xl">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="message" required />
                                </div>
                                <div className="flex justify-center mt-6">
                                    <button className='myBtn '>
                                        Send
                                        <div className="icon">
                                            <FaArrowRight className='i' />
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2'>
                        <div className='grid grid-cols-2 gap-5 contact-cards'>
                            <div className=' text-center contact-card '>
                                <div className='contacatItem mx-auto mb-4'>
                                    <div className='inner'>
                                        <IoTimeOutline className='' />
                                    </div>
                                </div>
                                <h4 className='text-2xl font-bold text-tealColor'>
                                    Opening Hours
                                </h4>
                                <p className='text-slate-300 text-xl'>
                                    Sat - Thu
                                </p>
                                <p className='text-slate-300 text-xl font-thin'>
                                    9am - 10pm
                                </p>
                            </div>
                            <div className=' text-center contact-card'>
                                <div className='contacatItem mx-auto mb-4'>
                                    <div className='inner'>
                                        <IoLocationOutline />
                                    </div>
                                </div>
                                <h4 className='text-2xl font-bold text-tealColor'>
                                    Address
                                </h4>
                                <p className='text-slate-300 text-xl'>
                                    OptiSun Ltd.
                                </p>
                                <p className='text-slate-300 text-xl font-thin'>
                                    Kaliganj, Satkhira
                                </p>
                            </div>
                            <div className=' text-center contact-card'>
                                <div className='contacatItem mx-auto mb-4'>
                                    <div className='inner'>
                                        <MdSupportAgent />
                                    </div>
                                </div>
                                <h4 className='text-2xl font-bold text-tealColor'>
                                    Support
                                </h4>
                                <p className='text-slate-300 text-xl font-thin'>
                                    +8801771-393709
                                </p>
                                <p className='text-slate-300 text-xl font-thin'>
                                    +9901823455
                                </p>
                            </div>
                            <div className=' text-center contact-card'>
                                <div className='contacatItem mx-auto mb-4'>
                                    <div className='inner'>
                                        <CiMail />
                                    </div>
                                </div>
                                <h4 className='text-2xl font-bold text-tealColor'>
                                    Mail
                                </h4>
                                <p className='text-slate-300 text-xl font-thin'>
                                    aptisun@gmail.com
                                </p>
                                <p className='text-slate-300 text-xl font-thin'>
                                    as.help@gamil.com
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;