
import { useCategoryById } from "@/hooks/useCategory"
import BillboardHero from "./billboard-hero";
import { LoadingSpinner } from "@/components/ui/spinner";



const Billboard = ({ categoryId }: { categoryId: string }) =>
{
    const { data: categoryData, } = useCategoryById(categoryId);
    return (
        <>
            <section className=" flex  justify-center  pt-10    ">
                {categoryData && <BillboardHero categoryData={categoryData} />}
                {!categoryData && <div className=" relative flex w-[70vw] h-[65vh]  justify-center items-center  rounded-md ">
                    <LoadingSpinner />
                </div>}
            </section>
        </>
    )
}

export default Billboard