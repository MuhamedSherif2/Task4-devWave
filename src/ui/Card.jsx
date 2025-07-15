

function Card({ paragraph, img, name, place }) {
    return (
        <div className="p-8 m-3 lg:m-0 bg-[#1F1F1F]">
            <p className="text-white text-5xl my-10">``</p>
            <p className="text-lg md:text-2xl text-[#FFFFFF] italic mb-6">
                {paragraph}
            </p>
            <div className="flex items-center my-20 gap-5">
                <img src={img} alt="" />
                <div>
                    <p className="font-bold text-[#FFFFFF]">{name}</p>
                    <p className="text-[#929292]">{place}</p>
                </div>
            </div>
        </div>
    )
}
export default Card