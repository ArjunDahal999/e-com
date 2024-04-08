import { ICategories } from "@/types/categories";
import axios from "axios";

//@ts-ignore
const API_URL = import.meta.env.VITE_DASH_URL

export const getCategories = async (): Promise<ICategories[]> =>
{
    try
    {
        const response = await axios.get('https://e-com-nu-seven.vercel.app/api/05ab8e9c-d972-419d-939f-cee9c5be3861/categories');
        console.log(response.data)
        return response.data

    } catch (error: any)
    {
        console.log(error)
        return error?.response?.data;
    }
};
export const getProducts = async()=>{
    try {
       const response =  await axios.get('https://e-com-nu-seven.vercel.app/api/05ab8e9c-d972-419d-939f-cee9c5be3861/products')
       return response.data
    } catch (error) {
        return error
    }
}