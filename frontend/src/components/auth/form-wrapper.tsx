import
{
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { BlackLogo, WhiteLogo } from "@/assets/images"

interface FormWrapperPropsType
{
    children: React.ReactNode,
    headerLable: string,
    backButtonLabel: string,
    backButtonHref: string,
}


const FormWrapper = ({ children, headerLable, backButtonHref, backButtonLabel }: FormWrapperPropsType) =>
{
    return (
        <Card className=" w-[400px] max-sm:m-2  ">
            <CardHeader className=" justify-center flex items-center ">
                <Link to={'/'}>
                    <img className=" dark:hidden" width={200} src={BlackLogo} />
                    <img className=" hidden dark:block " width={200} src={WhiteLogo} />
                </Link>
                <CardTitle className=" text-center pt-5">{headerLable}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <Link className=" text-center  w-full" to={backButtonHref}>
                    <Button variant={"link"}> {backButtonLabel}</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default FormWrapper