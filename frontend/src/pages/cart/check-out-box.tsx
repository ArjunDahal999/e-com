import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/store/cart-store"

const CheckOutBox = () =>
{
    const { productsData } = useCartStore()
    const sum = productsData.reduce((total, p) => total + parseInt(p.price), 0)
    return (
        <Card className=" lg:w-[20vw] lg:h-[40vh] max-md:w-[95vw]  mt-9 lg:pt-12">
            <CardContent className=" h-[60%] cart-scroller overflow-y-scroll" >
                {productsData?.map((p) => (
                    <>
                        <div className=" flex justify-between gap-x-5">
                            <h1>{p.name}</h1>
                            <h1>{p.price}</h1>
                        </div>

                    </>
                ))}
            </CardContent>
            <Separator className="" />
            <CardFooter>

                <div className=" flex items-end flex-col w-full">
                    <h1 className=" text-2xl">Total</h1>
                    <Separator />
                    <h1 className=" text-xl mt-2">Rs.{sum}</h1>
                </div>

            </CardFooter>
        </Card>
    )
}

export default CheckOutBox