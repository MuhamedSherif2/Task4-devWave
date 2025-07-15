import LightingImg from '../../assets/Lighting design icon.svg'
import InteriorImg from '../../assets/Interior design icon.svg'
import OutdoorImg from '../../assets/Outdoor design icon.svg'


function Services() {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="flex items-center gap-7 text-[#1F1F1F]">
                    <span className="border h-[1px] w-[80px] hidden md:flex"></span>
                    <h2 className="text-[22px] md:text-[40px] font-semibold ">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">
                    <div className="flex flex-col md:flex-row items-start gap-7 p-5">
                        <img src={LightingImg} className='w-[60px]'  alt="LightingImg" />
                        <div>
                            <h3 className='mb-5 text-[17px] md:text-3xl font-semibold'>Lighting Design</h3>
                            <p className='text-[#545454] text-[15px] md:text-[22px]'>Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-7 p-5">
                        <img src={InteriorImg} className='w-[60px]'  alt="InteriorImg" />
                        <div>
                            <h3 className='mb-5 text-[17px] md:text-3xl font-semibold'>Interior Design</h3>
                            <p className='text-[#545454] text-[15px] md:text-[22px]'>From concept to completion, we oversee every detail to bring your vision to life efficiently</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-7 p-5">
                        <img src={OutdoorImg}  className='w-[60px]' alt="OutdoorImg" />
                        <div>
                            <h3 className='mb-5 text-[17px] md:text-3xl font-semibold'>Outdoor Design</h3>
                            <p className='text-[#545454] text-[15px] md:text-[22px]'>Celebrate the changing seasons with our seasonal outdoor decor services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services