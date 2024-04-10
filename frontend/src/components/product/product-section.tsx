import { IProduct } from "@/types"
import ProductCard from "./product-card"


const ProductSection = ({ productsData }: { productsData?: IProduct[] }) =>
{
    return (
        <>
            <h1 className=" text-center text-3xl pt-20">Our Products</h1>
            <section className="  pt-10 grid gap-y-4  grid-cols-1  md:grid-cols-2 lg:grid-cols-4     min-h-screen pb-10 place-content-start  place-items-center w-full">
                {productsData?.map((product) => (
                    <ProductCard key={product.id} productData={product} />
                ))}
            </section>
        </>
    )
}

export default ProductSection