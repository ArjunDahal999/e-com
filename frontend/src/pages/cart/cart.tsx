import CartProduct from "@/components/cart/cart-product"
import { useCartStore } from "@/store/cart-store"
import CheckOutBox from "./check-out-box"
import { Button } from "@/components/ui/button"
import { checkOut } from "@/services/e-com-services"
import { useState } from "react"
import { toast } from "sonner"
import { LoadingSpinner } from "@/components/ui/spinner"

const Cart = () =>
{
    const { productsData } = useCartStore()
    const [isLoading, setIsLoading] = useState(false)
    const handleCheckOut = async () =>
    {
        setIsLoading(true)
        const response = await checkOut(productsData)
        setIsLoading(false)
        console.log(response.data)
        toast.success(response.data)
    }
    return (
        <div className=" lg:h-[80vh] flex max-md:flex-col max-sm:flex-col justify-center max-md:items-center pt-20 gap-x-40 ">
            <div >
                <h1 className=" text-center text-3xl pb-10"> My Cart Product</h1>
                <div className="h-[500px] max-md:h-fit scroll-cart-product overflow-y-scroll">
                    {productsData?.map((p) => (<CartProduct productData={p} />))}
                </div>
            </div>
            <div className=" max-md:pt-10">
                <h1 className=" text-4xl">Check Out</h1>
                <CheckOutBox />
                <div className=" flex justify-end pt-4">
                    <Button disabled={isLoading} size={"lg"} variant={"outline"} onClick={handleCheckOut}>
                        {isLoading ? <LoadingSpinner /> : "Buy Now"}
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default Cart