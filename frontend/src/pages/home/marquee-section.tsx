import { Apple, Dell, Lg, Logitech, Rog, Samsung } from "@/assets/images"
import Marquee from "react-fast-marquee";
const MarqueeSection = () =>
{
    return (
        <Marquee className=" md:w-[85vw] mx-auto"  >
            <div className=" flex  justify-around   max-sm:gap-x-12  md:w-[80vw] items-center ">
                <img className="w-32 object-contain " src={Apple} alt="" />
                <img className="w-24 object-contain " src={Lg} alt="" />
                <img className="w-32 object-contain " src={Rog} alt="" />
                <img className="w-32 object-contain " src={Samsung} alt="" />
                <img className="w-24 object-contain " src={Dell} alt="" />
                <img className="w-32 object-contain " src={Logitech} alt="" />
            </div>
        </Marquee>
    )
}

export default MarqueeSection