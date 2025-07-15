import MaskImg from '../../assets/Mask group (1).png'

import { HiMiniRocketLaunch } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




function Designing() {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly py-10">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#1F1F1F] text-[22px] md:text-6xl font-bold">Designing Your Dream in Three Simple Steps</h2>
                    <div className='mt-3'>
                        <div className='flex gap-2 sm:gap-4'>
                            <div className='flex flex-col items-center'>
                                <HiMiniRocketLaunch className='w-[60px] h-[60px] bg-[#1F1F1F] rounded-full text-white p-4' />
                                <span className='border block border-[#9B9B9B] h-[70px] w-0 my-5'></span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h2 className='text-xl md:text-3xl font-bold text-[#1F1F1F]'>Start Project</h2>
                                <p className='text-lg md:text-2xl text-[#545454]'>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</p>
                            </div>
                        </div>

                        <div className='flex gap-2 sm:gap-4'>
                            <div className='flex flex-col items-center'>
                                <HiOutlineLightBulb className='w-[60px] h-[60px] bg-[#1F1F1F] rounded-full text-white p-4' />
                                <span className='border block border-[#9B9B9B] h-[70px] w-0 my-5'></span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h2 className='text-xl md:text-3xl font-bold text-[#1F1F1F]'>Craft</h2>
                                <p className='text-lg md:text-2xl text-[#545454]'>Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</p>
                            </div>
                        </div>

                        <div className='flex gap-2 sm:gap-4'>
                            <div className='flex flex-col items-center'>
                                <IoIosCheckmarkCircleOutline className='w-[60px] h-[60px] bg-[#1F1F1F] rounded-full text-white p-4' />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h2 className='text-xl md:text-3xl font-bold text-[#1F1F1F]'>Execute</h2>
                                <p className='text-lg md:text-2xl text-[#545454]'>Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <img src={MaskImg} alt="MaskImg" className="w-[600px] h-[300px] md:h-[600px] " />
                </div>
            </div>
        </section>
    )
}
export default Designing