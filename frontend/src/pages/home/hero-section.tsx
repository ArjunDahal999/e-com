import { OmMan } from '@/assets/images'


const HeroSection = () =>
{
    return (
        <div className=" flex h-[70vh] lg:gap-x-32 items-center w-full justify-center  max-sm:flex-col">
            <div className=" lg:text-6xl  md:text-4xl text-3xl">
                <h1 className=" text-center">EveryThing You Need Is</h1>
                <h1 className="text-blue-700 font-bold text-center lg:text-7xl md:text-5xl  text-4xl">  Sasto Masto </h1>
            </div>
            <div className="">
                <img width={500} src={OmMan} />
            </div>
        </div>
    )
}

export default HeroSection