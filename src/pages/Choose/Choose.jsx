import { BsQuestionLg } from "react-icons/bs";
import './Choose.css'
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiProtectionGlasses } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaShippingFast, FaSuperpowers } from "react-icons/fa";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { PiSunglassesBold } from "react-icons/pi";

const Choose = () => {
    return (
        <div className="choose pb-10 pt-12 md:pt-16 px-2">
            <div className="container">
                <div className="text-center">
                    <div className='flex items-center gap-5 justify-center'>
                        <div className='title-box '>
                            <BsQuestionLg className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>WHY CHOOSE US</p>
                    </div>
                    <h2 className=" text-4xl font-myTitle font-bold text-slate-100 py-5">
                        Our Vision, Your
                        Style
                    </h2>
                </div>

                <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    <div className="p-6 rounded-lg bg-opacity-25 text-center chooseCard">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                <MdOutlineWorkspacePremium />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">Premium Quality</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            Our sunglasses are crafted from the finest materials, ensuring durability, comfort, and lasting performance
                        </p>
                    </div>

                    {/* item-2  */}
                    <div className="p-6 rounded-lg chooseCard bg-opacity-25 text-center">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                {/* <GiProtectionGlasses /> */}
                                <PiSunglassesBold />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">100% UV Protection</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            Your eye health is our priority. All our sunglasses come with 100% UV protection, shielding your eyes from harmful UVA
                        </p>
                    </div>
                    {/* item-3  */}
                    <div className="p-6 rounded-lg chooseCard bg-opacity-25 text-center">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                <FaArrowTrendUp />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">Trendsetting Designs</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            From timeless classics to the latest fashion-forward designs, our diverse collection of sunglasses has something for every occasion and personality
                        </p>
                    </div>
                    {/* item-4  */}
                    <div className="p-6 rounded-lg chooseCard bg-opacity-25 text-center">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                <FaSuperpowers />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">Affordable Luxury</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            Looking great doesn't have to break the bank. We offer luxury-quality sunglasses at accessible prices
                        </p>
                    </div>
                    {/* item-5  */}
                    <div className="p-6 rounded-lg chooseCard bg-opacity-25 text-center">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                <LiaMoneyBillWaveSolid />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">Money-Back Guarantee</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            Shop with confidence! If you're not completely satisfied with your purchase, we offer hassle-free returns within 30 days
                        </p>
                    </div>
                    {/* item-6  */}
                    <div className="p-6 rounded-lg chooseCard bg-opacity-25 text-center">
                        <div className="card-icon mx-auto">
                            <div className="inner">
                                <FaShippingFast />
                            </div>
                        </div>
                        <h4 className="text-tealColor font-mySubTitle font-bold text-2xl py-3">Fast & Free Shipping</h4>
                        <p className="text-slate-300 font-thin text-xl">
                            We know you can't wait to get your new shades. That's why we offer fast, free shipping on all orders over $50
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;