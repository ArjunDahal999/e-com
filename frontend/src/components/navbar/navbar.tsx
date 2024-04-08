import { useCategory } from "@/hooks/useCategory"
import { HeartIcon, SearchIcon, ShoppingBagIcon, User2Icon } from "lucide-react"
import NavBarCategories from "./navbar-categories"


const Navbar = () =>
{

    const{ data :  categoryData} = useCategory()
    return (
        <header>
            <nav className=" flex space-x-12 md:px-6 py-10 items-center">
                <h1>SastoMasto</h1>
                <div className=" relative flex flex-1 items-center">
                    <SearchIcon className=" translate-x-[40px] text-slate-500" />
                    <input
                        placeholder=" Search..."
                        className=" w-full indent-10 bg-slate-400/20 py-2 rounded-full" type="text" />
                </div>
                <div className=" flex gap-x-6">
                    <HeartIcon />
                    <ShoppingBagIcon />
                    <User2Icon />
                </div>
            </nav>
                <NavBarCategories data={categoryData}/>
        </header>
    )
}

export default Navbar