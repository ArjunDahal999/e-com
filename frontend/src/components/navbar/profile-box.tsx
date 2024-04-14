import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/drop-down-menu"
import { useAuthStore } from "@/store/store"
import { LogOutIcon, MoonIcon, SunIcon, User2Icon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { Switch } from "../ui/switch"
import { useTheme } from "../theme-provider"
import { Button } from "../ui/button"


const ProfileBox = () =>
{
    const { userData } = useAuthStore()
    const logout = useAuthStore().actions.logout
    const { setTheme, theme } = useTheme()
    const navigate = useNavigate()
    const handelLogout = () =>
    {
        try
        {
            logout()
            navigate('/')

        } catch (error)
        {
            console.log(error)
        }

    }
    if (!userData)
    {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger><User2Icon /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className=" flex justify-center ">
                        <Link to={"/login"}>Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className=" flex justify-between " >
                        <SunIcon />
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
                        />
                        <MoonIcon />
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>

        )
    }

    // for logged in user
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center justify-center  bg-blue-500 text-white  size-[35px] rounded-full">
                    <h1 className=" capitalize">{userData?.username.slice(0, 1)}</h1>
                </div></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className=" flex justify-between " >
                    <SunIcon />
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
                    />
                    <MoonIcon />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button onClick={handelLogout} variant={"secondary"}><LogOutIcon className=" mr-4" /> Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )

}

export default ProfileBox