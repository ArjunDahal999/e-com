
import { CATEGORY_QUERY_KEY, TODO_QUERY_KEY } from "@/constants";
import { getCategories } from "@/services/e-com-services";
import {useQuery } from "@tanstack/react-query";

// const queryClient = useQueryClient()

export const useCategory = () => useQuery({
    queryKey: CATEGORY_QUERY_KEY ,
    queryFn: getCategories
})
