
import { Card, CardContent, CardFooter } from '../ui/card'
import { Trash } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { IProduct } from '@/t/products'

const CartProduct = ({ productData }: { productData: IProduct }) =>
{
    const { addOrRemoveCartProduct } = useCartStore()
    return (
        <div className="">
            <Card className="  w-[390px] max-md:w-[95vw] h-[100px] transition flex justify-center items-center duration-700 hover:shadow-lg  ">
                <CardContent className=' '>
                    <img className=" rounded-md size-[70px] object-contain " src={productData.images[0].url} alt="" />
                </CardContent>
                <CardFooter className=" flex  flex-1 p-2 flex-col items-start w-full ">
                    <h1 className=" capitalize">{productData.name}</h1>
                    <div className=" flex items-center   w-full  gap-x-2 pt-3">
                        <h1>Rs.{productData.price}</h1>
                    </div>
                </CardFooter>
                <CardFooter className=" ">
                    <Trash onClick={() => addOrRemoveCartProduct(productData)} className='cursor-pointer size-6 text-slate-300 hover:text-red-500' />
                </CardFooter>
            </Card>
        </div>
    )
}

export default CartProduct