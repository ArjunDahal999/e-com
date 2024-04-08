import { ICategories } from "@/types/categories"
import { NavLink } from "react-router-dom"

const NavBarCategories = ({data}:{data?:ICategories[]}) => {

    console.log({data})
  return (
<nav >
    <ul className=" flex justify-center gap-x-10 ">
     <NavLink   to={'/'} >
      {({ isActive }) => (
                <li className={isActive ? " text-blue-500 font-bold" : ""}>Home</li>
            )}
      </NavLink>
    {data && data?.map((e)=>(
           <NavLink key={e.id}  to={`/${e.name}`}>
                {({ isActive }) => (
                    <li className={isActive ? " text-blue-500 font-bold" : ""}>{e.name}</li>
                )}
             </NavLink>
    ))}
    </ul>

</nav>
  )
}

export default NavBarCategories
