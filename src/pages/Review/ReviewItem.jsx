import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import pic from '../../assets/img/pic-1.jpeg';
import './ReviewItem.css'

const ReviewItem = ({review}) => {
    return (
        <div className='flex flex-col sm:flex-row-reverse items-stretch p-3 reviewItem relative'>
            <div className='w-1/2 mx-auto top-3 md:top-0 md:w-1/3 reviewImg relative sm:right-4'>
                <img className='' src={review.image} alt="" />
            </div>
            <div className='w-full md:w-2/3  flex items-center reviewContent'>
                <div className='reviewInner relative sm:left-4 p-5'>
                    <h4 className='text-4xl font-bold text-tealColor font-mySubTitle'>{review.name}</h4>
                    <h6 className='text-pinkColor'>{review.prof}</h6>

                    <div className='mt-6 relative py-8'>
                        <BiSolidQuoteLeft className='text-3xl text-tealColor absolute top-0 left-1/2 -translate-x-1/2'/>
                        <p className='text-xl font-thin text-slate-300'>
                            {review.comment}
                        </p>
                        <BiSolidQuoteRight className='text-3xl text-tealColor absolute bottom-0 left-1/2 -translate-x-1/2'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;