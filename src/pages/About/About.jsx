import { BsInfoLg } from 'react-icons/bs';
import aboutPic from '../../assets/img/about-removebg-preview.png'
const About = () => {
    return (
        <div className=" bg-[#222222] px-2 pt-10" id="about">
            <div className="container flex flex-col md:flex-row-reverse justify-center items-center h-full">

                <div className="w-full md:w-1/2 py-4">
                    <div className='flex items-center gap-5'>
                        <div className='title-box '>
                            <BsInfoLg className='icon' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>ABOUT</p>
                    </div>
                    <h2 className='md:text-6xl text-4xl font-myTitle font-bold text-slate-100 py-5'>
                        Our Vision, Your
                        Style
                    </h2>
                    <p className='text-slate-300 text-xl font-thin'>
                        At OptiSun, we believe that sunglasses are more
                        than just combine timeless designs with modern trends,
                        ensuring that every pair offers both fashion and function.
                        <br />
                        From protecting your eyes with 100% UV protection to
                        elevating your outfit, our collection has something for every
                        occasion and personality.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img className='w-full' src={aboutPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;