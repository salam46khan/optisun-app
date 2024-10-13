import React, { useEffect, useRef, useState } from 'react';
import { FaRegComments } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewItem from './ReviewItem';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {
    const reviewContainer = useRef()
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    };


    useGSAP(() => {
        gsap.from('.review-con', {
            y: -100,
            scale: 2,
            duration: 0.6,
            stagger: 0.2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.review-con',
                start: 'top 90%',
                end: 'top 50%',
                scrub: 2,
            },
        }, { scope: reviewContainer })
        gsap.from('.user-review', {
            y: -100,
            scale: 0.4,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: '.user-review',
                start: 'top 90%',
                end: 'top 70%',
                scrub: 2,
            },
        }, { scope: reviewContainer })
    })

    return (
        <div className='py-10 md:pt-20 px-2 overflow-hidden' id='review' ref={reviewContainer}>
            <div className="container">
                <div className='text-center review-con'>
                    <div className='flex items-center gap-5 justify-center'>
                        <div className='title-box '>
                            <FaRegComments className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>REVIEW</p>
                    </div>
                    <h2 className=" text-4xl font-myTitle font-bold text-slate-100 py-5">
                        What Our Customers
                        Are Saying
                    </h2>
                </div>

                <div className='text-white px-5 '>
                    <div className='w-full user-review  max-w-4xl mx-auto pt-10'>
                        <Slider {...settings}>
                            {
                                review.map(review => <ReviewItem
                                    key={review.id}
                                    review={review}>

                                </ReviewItem>)
                            }


                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;