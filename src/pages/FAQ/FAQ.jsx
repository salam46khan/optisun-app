import React, { useEffect, useRef, useState } from 'react';
import FAQitem from './FAQitem';
import think from '../../assets/img/abc.png'
import { BsQuestionLg } from 'react-icons/bs';
import './FAQitem.css'

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQ = () => {
    const [faq, setFaq] = useState([])

    const faqsec = useRef(null)

    useEffect(() => {
        fetch('FAQ.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    useGSAP(() => {
        gsap.from('.FAQ-con', {
            y: -100,
            scale: 2,
            duration: 0.6,
            stagger: 0.2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.FAQ-con',
                start: 'top 90%',
                end: 'top 50%',
                scrub: 2,
            },
        }, { scope: faqsec }),
        gsap.from('.faq-items', {
            x: 100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.faq-items',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2,
            },
        }, {scope: faqsec}),
        gsap.from('.thinkPic', {
            x: -200,
            duration: 2,
            scale:0.8,
            opacity: 0,
            scrollTrigger: {
                trigger: '.thinkPic',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2
            },
        }, {scope: faqsec})

    })


    return (
        <div className=' pt-14 px-2 overflow-hidden' id='faq' ref={faqsec}>
            <div className="container flex flex-col md:flex-row items-stretch">
                <div className='w-full md:w-1/2 flex items-start flex-col justify-center p-2 '>


                    <div className=' text-start FAQ-con'>
                        <div className='flex items-center  gap-5'>
                            <div className='title-box '>
                                <BsQuestionLg className='icon font-extrabold' />
                            </div>
                            <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>FAQ</p>
                        </div>
                        <h2 className=" text-4xl mb-5 font-myTitle font-bold text-slate-100 py-5">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className='w-full faq-items'>
                        {
                            faq.map(faq => <FAQitem key={faq.id} text={faq.text} title={faq.title}></FAQitem>)
                        }
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex items-end'>
                    <img className='w-full thinkPic' src={think} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;