import { FaArrowRight } from 'react-icons/fa';
import './Hero.css'
import heroPic from '../../assets/img/hero.png'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Hero = () => {
    // const heroItem = useRef();

    useGSAP(() => {
        gsap.timeline()
            .from(".heroContent .ab", {
                x: -100,
                duration: 1,
                opacity: 0,
                delay: 1.4,
                stagger:0.2
            })
            .from(".heroImg", {
                scale: 0.7,
                duration: 0.5,
                opacity: 0,
            },)

        // gsap.from(".herContent .ab")
    })
    return (
        <div className="myHero p-2" id='hero'>
            <div className="container h-full flex flex-col md:flex-row justify-center md:justify-start items-center text-white ">
                <div className='w-full md:w-1/2 heroContent'>
                    <h1 className='font-myTitle text-5xl md:text-7xl font-extrabold ab'>
                        Find Your Shade of Cool
                    </h1>
                    <p className='font-normalFont md:text-2xl text-xl font-thin w-full max-w-2xl py-4 ab text-slate-300'>
                        Discover Our Exclusive Collection of Sunglasses That Combine
                        Fashion and Function
                    </p>
                    <div className='ab'>
                        <button className='myBtn'>
                            buy
                            <div className="icon">
                                <FaArrowRight className='i' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <img className='w-[90%] mx-auto heroImg' src={heroPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;