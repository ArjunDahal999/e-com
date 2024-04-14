import { useCategory } from "@/hooks/useCategory"
import { SearchIcon, User2Icon } from "lucide-react"
import NavBarCategories from "./navbar-categories"
import { useCartStore } from "@/store/cart-store"
import { CartSlider } from "../cart/cart-slider"
import { Link } from "react-router-dom"
import { BlackLogo, WhiteLogo } from "@/assets/images"
import ProfileBox from "./profile-box"


const Navbar = () =>
{
    const { productsData } = useCartStore()
    const { data: categoryData } = useCategory()
    return (
        <header>
            <nav className=" flex  md:space-x-12 md:px-12 py-6  px-2 items-center border-b-2">
                <Link to={'/'}>
                    <img className=" dark:hidden" width={200} src={BlackLogo} />
                    <img className=" hidden dark:block " width={200} src={WhiteLogo} />
                </Link>
                <div className=" relative flex flex-1 items-center">
                    <SearchIcon className=" translate-x-[40px] text-slate-500" />
                    <input
                        placeholder=" Search..."
                        className=" w-full indent-10 bg-slate-400/20 py-2 rounded-full" type="text" />
                </div>
                <div className=" flex items-center gap-x-6">
                    <ProfileBox />
                    <div className=" relative">
                        <div className=" absolute p-2 top-[-16px] right-[-14px] w-5 h-5 text-white flex justify-center items-center bg-red-500 rounded-full">
                            <h1 className=" font-bold ">{productsData?.length}</h1>
                        </div>
                        <CartSlider />
                    </div>

                </div>
            </nav>
            <NavBarCategories data={categoryData} />
        </header>
    )
}

export default Navbar