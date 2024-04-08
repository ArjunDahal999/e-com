import axios from "axios";

//@ts-ignore
const API_URL = import.meta.env.VITE_DASH_URL

export const getCategories = async (): Promise<any> =>
{
    try
    {
        const response = await axios.get('http://localhost:3000/api/05ab8e9c-d972-419d-939f-cee9c5be3861/categories', { cache: "no-cache" });
        console.log(response.data)
        return response

    } catch (error: any)
    {
        return error?.response?.data;
    }
};
