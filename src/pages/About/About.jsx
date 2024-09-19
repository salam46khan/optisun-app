import { BsInfoLg } from 'react-icons/bs';
import aboutPic from '../../assets/img/about-removebg-preview.png'
import Choose from '../Choose/Choose';
const About = () => {
    return (
        <div className=" bg-[#222222] pt-10" id="about">
            <div className="container flex flex-col md:flex-row-reverse justify-center items-center h-full px-2">

                <div className="w-full md:w-1/2 py-4">
                    <div className='flex items-center gap-5'>
                        <div className='title-box '>
                            <BsInfoLg className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>ABOUT</p>
                    </div>
                    <h2 className=' text-4xl font-myTitle font-bold text-slate-100 py-5'>
                        
                        The Perfect Blend of Style, Quality, and Protection
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

            <Choose></Choose>
        </div>
    );
};

export default About;