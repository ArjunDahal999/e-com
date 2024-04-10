import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/spinner'
import { useGetProductById } from '@/hooks/useProducts'
import { useCartStore } from '@/store/cart-store'


const Product = ({ productId }: { productId: string }) =>
{
    const { data: productData, isFetching } = useGetProductById(productId)
    const { addToCart } = useCartStore()
    const handelAddToCart = () =>
    {
        alert('dfdf')
        addToCart(productData!)
    }
    // if (isFetching)
    // {
    //     return <div className=" h-[80vh] flex justify-center items-center"><LoadingSpinner /></div>
    // }
    return (
        <div className=' flex items-center gap-x-[15vw]  h-[70vh] justify-center  pt-20'>
            <div className=" space-y-6">
                <h1 className=' text-3xl font-bold'>{productData?.name}</h1>
                <img width={400} className=' object-contain' src={productData?.images[0].url} />
            </div>
            <div className=" text-2xl space-y-5">
                <h1 className=' '>Price: Rs.{productData?.price}</h1>
                <h1>Size:{productData?.size.name}</h1>
                <div className=" flex items-center">
                    <h1>Color : </h1>
                    <div className={` w-8 h-8 rounded-full bg-[${productData?.color.value}]`}></div>
                    <h1>{productData?.color.name}</h1>
                </div>

                <h1>Category: {productData?.category.name}</h1>
                <div className=" flex flex-col gap-y-5">
                    <Button onClick={handelAddToCart} variant={'secondary'} className=' py-4'>Add to Cart </Button>
                    <Button variant={'secondary'} className=' py-4'>Buy Now </Button>
                </div>
            </div>
        </div>
    )
}

export default Product
