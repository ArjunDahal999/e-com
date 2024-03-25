import axios from "axios";
//@ts-ignore
const API_URL = import.meta.env.VITE_API_URL

export const registerAccount = async (data: any): Promise<any> =>
{
    try
    {
        const response = await axios.post(`${API_URL}/registerAccount`, data);
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};

export const loginToAccount = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/loginToAccount`, data, { withCredentials: true });
        return response.data;
    } catch (error: any)
    {
        return error?.response?.data;
    }
};

export const activateAccount = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/activateAccount`, data);
        return response.data;
    } catch (error: any)
    {
        return error.response?.data;
    }
};


export const forgotPassword = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/forgotPassword`, data);
        return response.data;
    } catch (error: any)
    {
        return error.response?.data;
    }
};

export const resetPassword = async (data: any) =>
{
    try
    {
        const response = await axios.post(`${API_URL}/resetPassword`, data);
        return response.data;
    } catch (error: any)
    {
        return error.response?.data;
    }
};

