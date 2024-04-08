import { getCategories } from "@/services/dashbaord"
import { HeartIcon, SearchIcon, ShoppingBagIcon, User2Icon } from "lucide-react"
import { useEffect, useState } from "react"







const Navbar = () =>
{
    const [c, setC] = useState();
    useEffect(() =>
    {
        const getc = async () =>
        {
            const data = await getCategories()
            console.log(data)
            setC(data)
        }
        getc()
    }, [])

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
        </header>
    )
}

export default Navbar