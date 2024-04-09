
import { useCategoryById } from "@/hooks/useCategory"
import BillboardHero from "./billboard-hero";



const Billboard = ({ categoryId }: { categoryId: string }) =>
{
    const { data: categoryData, } = useCategoryById(categoryId);
    console.log(categoryData)
    return (
        <>
            <section className=" flex  justify-center  pt-10    ">
                {categoryData && <BillboardHero categoryData={categoryData} />}
            </section>
        </>
    )
}

export default Billboard