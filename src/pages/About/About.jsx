import { BsInfoLg } from 'react-icons/bs';
import aboutPic from '../../assets/img/about-2.png'
import Choose from '../Choose/Choose';
import './About.css'
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


gsap.registerPlugin(useGSAP, ScrollTrigger);


const About = () => {


    useGSAP(() => {
        gsap.from('.content', {
            x: -100,
            duration: 0.6,
            stagger: 0.2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.content',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2,
                stagger: 0.4
            },
        }, {scope: '#about'}),
        gsap.from('.aboutPic', {
            x: 200,
            duration: 2,
            opacity: 0,
            scale:0.8,
            scrollTrigger: {
                trigger: '.aboutPic',
                start: 'top 90%',
                end: 'top 30%',
                scrub: 2,
                stagger: 0.4
            },
        }, {scope: '#about'})
    })

    return (
        <div className=" bg-[#222222] md:pt-16 pt-5 overflow-hidden" id="about">
            <div className="container flex flex-col md:flex-row-reverse justify-center items-center h-full px-2">

                <div className="w-full about-container md:w-1/2 py-4" >
                    <div className='flex items-center content gap-5 about-con-item'>
                        <div className='title-box '>
                            <BsInfoLg className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>ABOUT</p>
                    </div>
                    <h2 className=' text-4xl font-myTitle content font-bold text-slate-100 py-5 about-con-item'>

                        The Perfect Blend of Style, Quality, and Protection
                    </h2>
                    <p className='text-slate-300 content about-con-item text-xl font-thin'>
                        At OptiSun, we believe that sunglasses are more
                        than just combine timeless designs with modern trends,
                        ensuring that every pair offers both fashion and function.
                        <br />
                        From protecting your eyes with 100% UV protection to
                        elevating your outfit, our collection has something for every
                        occasion and personality.
                    </p>
                    <div className="flex content justify-start mt-6 about-con-item">
                        <Link to='review'>
                            <button className='myBtn'>
                                See Review
                                <div className="icon">
                                    <FaArrowRight className='i' />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full  flex justify-center md:w-1/2">
                    <img className='md:w-[90%] w-full aboutPic' src={aboutPic} alt="" />
                </div>
            </div>

            <Choose></Choose>
        </div>
    );
};

export default About;