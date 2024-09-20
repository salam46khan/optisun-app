import React, { useEffect, useState } from 'react';
import FAQitem from './FAQitem';
import think from '../../assets/img/abc.png'
import { BsQuestionLg } from 'react-icons/bs';
import './FAQitem.css'

const FAQ = () => {
    const [faq, setFaq] = useState([])
    useEffect(() => {
        fetch('FAQ.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])
    return (
        <div className=' pt-14 px-2 overflow-hidden' id='faq'>
            <div className="container flex flex-col md:flex-row items-stretch">
                <div className='w-full md:w-1/2 flex items-start flex-col justify-center p-2'>


                    <div className='flex items-center justify-center gap-5'>
                        <div className='title-box '>
                            <BsQuestionLg className='icon font-extrabold' />
                        </div>
                        <p className='text-pinkColor text-xl pt-1 font-mySubTitle tracking-[10px]'>FAQ</p>
                    </div>
                    <h2 className=" text-4xl mb-5 font-myTitle font-bold text-slate-100 py-5">
                        Frequently Asked Questions
                    </h2>

                    <div className='w-full'>
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