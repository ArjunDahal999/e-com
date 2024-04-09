
import { PRODUCT_QUERY_KEY } from "@/constants";
import { getProducts } from "@/services/e-com-services";
import { IGetProductsParams } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useProducts = (parmas: IGetProductsParams) => useQuery({
    queryKey: PRODUCT_QUERY_KEY,
    queryFn: () => getProducts(parmas)
})
export const useProductsFilter = (parmas: IGetProductsParams) => useMutation({
    mutationFn: () => getProducts(parmas)
})
