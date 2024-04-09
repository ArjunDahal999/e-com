
import { ICategory, IGetProductsParams, IProduct } from "@/types/products";
import { QueryFunctionContext } from "@tanstack/react-query";
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