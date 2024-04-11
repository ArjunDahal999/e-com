
import { NavLink } from "react-router-dom";
import { LoadingSpinner } from "../ui/spinner";
import { ICategory } from "@/types/products";

interface NavBarCategoriesProps
{
  data?: ICategory[];
}

const NavBarCategories: React.FC<NavBarCategoriesProps> = ({ data }) =>
{
  console.log(data)
  return (
    <nav>
      <ul className="flex justify-center gap-x-10 pt-4 text-[1.1rem] max-sm:hidden">
        {!data ? (
          <LoadingSpinner />
        ) : (
          <>
            <NavLink to="/">
              {({ isActive }) => (
                <li className={isActive ? "text-blue-500 font-bold" : ""}>
                  Home
                </li>
              )}
            </NavLink>
            {data?.map((category) => (
              <NavLink key={category.id} to={`/${category.name}/${category.id}`}>
                {({ isActive }) => (
                  <li className={isActive ? "text-blue-500 font-bold" : ""}>
                    {category.name}
                  </li>
                )}
              </NavLink>
            ))}
            <NavLink to="/cart">
              {({ isActive }) => (
                <li className={isActive ? "text-blue-500 font-bold" : ""}>
                  Cart
                </li>
              )}
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBarCategories;