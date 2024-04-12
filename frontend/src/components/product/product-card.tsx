import
{
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { IProduct } from "@/t/products"
import { Link } from "react-router-dom";

const ProductCard = ({ productData }: { productData: IProduct }) =>
{
    const price = parseFloat(productData.price);
    const increasedPrice = price + (0.25 * price);
    return (
        <Link to={`/${productData.category.name}/${productData.categoryId}/${productData.name}/${productData.id}`}>
            <Card className="  w-fit h-fit transition duration-700 hover:shadow-lg cursor-pointer ">
                <CardContent>
                    <img className=" rounded-md size-[300px] object-contain " src={productData.images[0].url} alt="" />
                </CardContent>
                <CardFooter className=" flex  flex-col items-start w-full">
                    <h1 className=" capitalize">{productData.name}</h1>
                    <h1 className=" text-black/50">{productData.category.name}</h1>
                    <div className=" flex items-center   w-full  gap-x-2 pt-3">
                        <h1 className=" line-through text-red-500">Rs.{increasedPrice}</h1>
                        <h1>Rs.{productData.price}</h1>
                    </div>
                </CardFooter>
            </Card>
        </Link>

    )
}

export default ProductCard