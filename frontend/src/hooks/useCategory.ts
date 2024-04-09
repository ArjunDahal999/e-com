
import { CATEGORY_BY_ID_QUERY_KEY, CATEGORY_QUERY_KEY } from "@/constants";
import { getCategories, getCategoryById } from "@/services/e-com-services";
import { useQuery } from "@tanstack/react-query";



export const useCategory = () => useQuery({
    queryKey: CATEGORY_QUERY_KEY,
    queryFn: getCategories
})


export const useCategoryById = (cid: string) =>
{
    return useQuery({
        queryKey: [CATEGORY_BY_ID_QUERY_KEY, cid],
        queryFn: () => getCategoryById(cid)
    });
};