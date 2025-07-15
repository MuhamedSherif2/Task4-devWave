import Img from '../../assets/Mask group (2).png'
import ImgSophie from '../../assets/adryan.png'
import ImgJames from '../../assets/lola.png'
import Card from '../../ui/Card';


function Customers() {
    return (
        <section className="py-12 sm:px-6 lg:px-8 ">
            <div className="container mx-auto lg:relative">
                <div className='flex justify-between'>
                    <img src={Img} alt="" className='hidden xl:flex' />
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        What Our Customers Say About Us
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex gap-8 xl:absolute xl:top-[220px] xl:left-[300px]">
                    <Card
                        paragraph="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!"
                        img={ImgSophie}
                        name="Sophie Carter"
                        place="New York, USA"
                    />
                    <Card
                        paragraph="Exceptional service! From the initial consultation to the final reveal, your team
                        demonstrated professionalism and a keen eye for design. Highly recommend!"
                        img={ImgJames}
                        name="James Bennett"
                        place="Toronto, Canada"
                    />
                </div>
            </div>
        </section>

    )
}

export default Customers;