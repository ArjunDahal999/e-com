
import { LoadingSpinner } from "@/components/ui/spinner"
import { useProducts } from "@/hooks/useProducts"

import ProductSection from "@/components/product/product-section";
import HeroSection from "./hero-section";
import MarqueeSection from "./marquee-section";

const HomePage = () =>
{
    const { data: productsData, isLoading } = useProducts({})

    if (isLoading)
    {
        return (
            <main className="  h-[80vh] flex justify-center flex-col items-center">
                <LoadingSpinner />
            </main>
        )
    }
    console.log(productsData)

    return (
        <>
            <main className=" min-h-screen  ">
                <HeroSection />
                <MarqueeSection />
                <ProductSection productsData={productsData} />
            </main>
        </>
    )
}

export default HomePage