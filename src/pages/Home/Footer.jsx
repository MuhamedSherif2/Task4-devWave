import IMG from '../../assets/Logo 2.png'
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-[#1F1F1F] text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-10">
                    <div className="space-y-4">
                        <img src={IMG} alt="Logo" />
                        <p className="text-gray-400">
                            VivaDecor your premier destination for luxury and modern interior design
                        </p>
                        <div className='flex items-center gap-4 mt-5 '>
                            <TbBrandFacebook className='bg-[#313131] p-2 rounded-md text-white w-[40px] h-[40px]' />
                            <SlSocialTwitter className='bg-[#313131] p-2 rounded-md text-white w-[40px] h-[40px]' />
                            <FaInstagram className='bg-[#313131] p-2 rounded-md text-white w-[40px] h-[40px]' />
                            <FaLinkedinIn className='bg-[#313131] p-2 rounded-md text-white w-[40px] h-[40px]' />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Interior design</a></li>
                            <li><a href="#" className="hover:text-white transition">Outdoor design</a></li>
                            <li><a href="#" className="hover:text-white transition">Lighting design</a></li>
                            <li><a href="#" className="hover:text-white transition">Office design</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4 text-lg">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Reviews</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-white mb-4 text-lg">Our Services</h4>
                        <address className="not-italic">
                            <p className="mb-2">info@vivadecor.com</p>
                            <p>Design Avenue<br />
                                Cityville, CA 90210<br />
                                United States</p>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer