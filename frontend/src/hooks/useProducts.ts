
import { PRODUCT_QUERY_KEY } from "@/constants";
import { getProductById, getProducts } from "@/services/e-com-services";
import { IGetProductsParams } from "@/types/products";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useProducts = (parmas: IGetProductsParams) => useQuery({
    queryKey: PRODUCT_QUERY_KEY,
    queryFn: () => getProducts(parmas)
})
export const useGetProductById = (id: string) => useQuery({
    queryKey: ['pp'],
    queryFn: () => getProductById(id)
})


export const useProductsFilter = (parmas: IGetProductsParams) => useMutation({
    mutationFn: () => getProducts(parmas)
})
