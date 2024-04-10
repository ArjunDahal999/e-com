import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { IProduct } from '@/types';

interface UserCartState
{
    productsData: IProduct[];
    addToCart: (productData: IProduct) => void;
}

export const useCartStore = create<UserCartState>()(
    devtools(
        persist(
            (set, get) => ({
                productsData: [],
                addToCart: (productData: IProduct) =>
                {
                    const currentProducts = get().productsData;
                    const doesProductExist = currentProducts.find((p)=>p.id == productData.id)    
                    if(doesProductExist)
                        {
                            set((state) => ({
                                productsData: state.productsData.filter((p)=>p.id != productData.id),
                    
                            }));

                            console.log(currentProducts);
                        }
                        else{
                            set((state) => ({
                        
                                productsData: [...state.productsData, productData],
                            }));
                        }

                },

            }),
            {
                name: 'user-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);