import Button from "../../ui/Button"
import { MdOutlineEmail } from "react-icons/md";



function Subscribe() {
    return (
        <section className="pt-12 bg-gray-50 w-fit mx-auto mt-5 z-40 rounded-md">
            <div className="flex flex-col flex-wrap justify-center items-cente w-full max-w-[700px] mx-auto p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                    Subscribe to Our Newsletter for Design Insights
                </h2>
                <p className="text-lg text-center text-[#545454] max-w-[600px] mt-3">
                    Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox
                </p>
                <div className="flex items-center justify-between w-[450px] mt-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <MdOutlineEmail className="text-[#8C8C8C] text-xl hidden sm:flex" />
                        <input type="email" className="text-[#8C8C8C] text-xl outline-0 " placeholder="Enter your email address" />
                    </div>
                    <Button className={'px-6 py-1 text-xl'}>Subscribe</Button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe