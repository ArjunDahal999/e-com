import { Button } from "@/components/ui/button"
import
{
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingBagIcon } from "lucide-react"
import CartProduct from "./cart-product"
import { useCartStore } from "@/store/cart-store"
import { Link } from "react-router-dom"

export const CartSlider = () =>
{
    const { productsData } = useCartStore()
    return (
        <Sheet  >
            <SheetTrigger asChild>
                <ShoppingBagIcon className=" cursor-pointer" />
            </SheetTrigger>
            <SheetContent className=" w-[20%] max-sm:w-full">
                <SheetHeader>
                    <SheetTitle> My Cart Products </SheetTitle>
                </SheetHeader>
                <div className=" translate-x-[-20px] space-y-4 pt-5 ">
                    {productsData?.map((p) => (<CartProduct productData={p} />))}
                </div>
                <SheetFooter>
                    <SheetClose asChild className=" justify-center flex w-full pt-5">
                        <Link to={'/cart'}>
                            <Button className=" bg-blue-400" type="submit">Check Out</Button>
                        </Link>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

