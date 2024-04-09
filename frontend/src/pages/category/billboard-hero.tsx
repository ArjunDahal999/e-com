import { ICategory } from '@/types'


const BillboardHero = ({ categoryData }: { categoryData: ICategory }) =>
{
    return (
        <div className=" relative flex h-fit justify-center items-center  bg-black/60  rounded-md ">
            <h1 className=" absolute text-8xl text-white z-[99]  drop-shadow-2xl ">{categoryData?.billboard?.lable}</h1>
            <img className=" opacity-70  rounded-md shadow-md  w-[70vw] h-[65vh] object-cover" src={categoryData?.billboard?.imageUrl} alt="" />
        </div>
    )
}

export default BillboardHero