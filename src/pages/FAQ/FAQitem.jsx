import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './FAQitem.css'

const FAQitem = ({ text, title }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div>
            <div className=" my-3 faqItem">

                <button onClick={() => setAccordionOpen(!accordionOpen)} className="w-full flex justify-between items-center p-3 md:p-6 md:px-10">
                    <p className="text-2xl text-tealColor font-semibold font-mySubTitle text-start">{title}</p>

                    <div className='faqBtn'>
                        <div className="inner">
                            {
                                accordionOpen ? <FaMinus /> : <FaPlus />
                            }
                        </div>
                    </div>

                </button>
                <div className={`grid overflow-hidden bg-[#0000000a] transition-all duration-200 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] p-3 md:p-5 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden text-2xl px-3 text-slate-300 font-thin">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQitem;