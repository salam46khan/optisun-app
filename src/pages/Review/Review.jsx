import React, { useEffect, useState } from 'react';
import { FaRegComments } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewItem from './ReviewItem';

const Review = () => {
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
    return (
        <div className='py-10 md:pt-16 px-2' id='review'>
            <div className="container">
                <div className='text-center'>
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
                    <div className='w-full max-w-3xl mx-auto pt-10'>
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