import Button from '../../ui/Button';
import Img1 from '../../assets/Image 1.png'
import Img2 from '../../assets/Image 2.png'
import { FaArrowDownLong } from "react-icons/fa6";



function Home() {
    return (
        <section className="min-h-screen w-full">
            <div className="container mx-auto py-14">
                <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-bold text-[#1F1F1F] text-[16px] md:text-[50px] lg:text-[100px]'>Interior Design</h1>
                        <p className='text-[#545454] text-[14px] md:text-[22px] md:pr-52'>
                            Step into a world where the art of Interior Design is meticulously crafted to bring together timeless
                            elegance and cutting-edge modern Innovation, Allowing you to transform your living spaces into the
                            epitome of luxury and sophistication
                        </p>
                    </div>
                    <div className='p-4 lg:w-[880px]'>
                        <img src={Img1} alt="product-Image" className='w-[400px] lg:w-[880px]'  />
                    </div>
                </div>
                
                <div className='mt-7 flex flex-col xl:flex-row flex-wrap items-center justify-between'>
                    <div>
                        <Button className={'px-10 py-2 text-[22px]'}>Start Project</Button>
                        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#545454] gap-10'>
                            <div>
                                <h3 className='text-[20px] md:text-[50px]'>400+</h3>
                                <p>Project Complete</p>
                            </div>
                            <div>
                                <h3 className='text-[20px] md:text-[50px]'>600+</h3>
                                <p>Satisfied Clients</p>
                            </div>
                            <div>
                                <h3 className='text-[20px] md:text-[50px]'>400+</h3>
                                <p>Unique Styles</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center relative w-[200px] sm:w-[400px] md:w-[500px] lg:w-auto'>
                        <span className='border-2 p-5 top-[-10px] left-[-10px] sm:p-20 absolute sm:top-[-20px] sm:left-[-20px] z-10 rounded-md'></span>
                        <img src={Img2} alt="" className='z-20' />
                        <Button className={'py-2 px-2 sm:py-5 sm:px-5 z-30 absolute bottom-0 right-0 sm:right-[-20px] md:right-[-40px] text-[14px] sm:text-5xl'}><FaArrowDownLong /></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home