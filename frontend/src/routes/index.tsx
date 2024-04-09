
import HomePageLayout from "@/layout/_homeLayout";
import ActivatePage from "@/pages/auth/activate";
import ForgotPassowordPage from "@/pages/auth/forgot-password";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import ResetPasswordPage from "@/pages/auth/reset-password";
import Category from "@/pages/category/category";
import HomePage from "@/pages/home/home-page";
import
{
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        path: ":category/:cid",
        element: <Category />,
        children: [
          {
            path: ":product/:pid",
            element: <h1>fsfsf</h1>
          }
        ]
      },
      {
        path: "",
        element: <HomePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/activate",
    element: <ActivatePage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassowordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  }
]);
