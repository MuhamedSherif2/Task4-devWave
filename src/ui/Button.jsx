function Button({children, className}){
    return(
        <button className={`bg-[#1F1F1F] text-white font-semibold cursor-pointer items-center justify-center transition duration-300 rounded-md hover:bg-[#323232] ${className}`}>{children}</button>
    )
}
export default Button