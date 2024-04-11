
import { ICategory, IGetProductsParams, IProduct } from "@/types";
import axios, { AxiosResponse } from "axios";

//@ts-ignore
const API_URL = import.meta.env.VITE_DASH_URL

export const getCategories = async (): Promise<ICategory[]> =>
{
    try
    {
        const response = await axios.get(`${API_URL}/categories`);
        console.log(response.data)
        return response.data

    } catch (error: any)
    {
        console.log(error)
        return error?.response?.data;
    }
};



export const getProducts = async (params: IGetProductsParams | null): Promise<IProduct[]> =>
{
    try
    {
        const response: AxiosResponse<IProduct[]> = await axios.get(`${API_URL}/products`, {
            params: params
        });
        return response.data;
    } catch (error: any)
    {
        return error;
    }
};

export const getCategoryById = async (cid: any): Promise<ICategory> =>
{
    try
    {
        const response = await axios.get(`${API_URL}/categories/${cid}`);
        return response.data;
    } catch (error: any)
    {
        console.log(error);
        return error?.response?.data;
    }
};



export const getProductById = async (id: string): Promise<IProduct> =>
{
    try
    {
        const response: AxiosResponse<IProduct> = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (error: any)
    {
        return error;
    }
};
export const checkOut = async (pData: IProduct[]): Promise<any> =>
{
    try
    {
        const response: AxiosResponse<IProduct> = await axios.post(`${API_URL}/checkout`,
            {
                productIds: pData.map((p) => p.id),
            });
        return response.data;
    } catch (error: any)
    {
        return error;
    }
};
