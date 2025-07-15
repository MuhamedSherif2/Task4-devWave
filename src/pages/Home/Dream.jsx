import Button from "../../ui/Button"
import MaskImg from '../../assets/Mask group.png'

function Dream() {
    return (
        <section className="w-full">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-evenly py-10">
                <div className="p-5">
                    <img src={MaskImg} alt="MaskImg" className="w-[600px] h-[300px] md:h-[600px] " />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#1F1F1F] text-[22px] md:text-6xl font-bold">Designing Your Dream With Brilliance</h2>
                    <p className="my-20 text-[15px] md:text-2xl text-[#545454]">
                        Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with
                        precision and brilliance for an unforgettable living experience
                    </p>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-[15px] md:text-2xl text-[#1F1F1F]">Living Room Interior Design</h3>
                        <span className="text-[20px] md:text-3xl text-[#1F1F1F]">+</span>
                    </div>
                    <div className="border text-[#DADADA] w-full mb-9"></div>
                    <div className="flex items-center justify-between mb-4">
                        <h3  className="text-[15px] md:text-2xl text-[#1F1F1F]">Commercial Office Room Interior Design</h3>
                        <span className="text-[20px] md:text-3xl text-[#1F1F1F]">+</span>
                    </div>
                    <div className="border text-[#DADADA] w-full mb-9"></div>
                    <Button className={'py-4 px-9 text-[18px] md:text-2xl'}>Learn More</Button>
                </div>
            </div>
        </section>
    )
}
export default Dream
