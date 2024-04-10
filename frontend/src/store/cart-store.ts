import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { IProduct } from '@/types';

interface UserCartState
{
    productData: IProduct[];
    addToCart: (productData: IProduct) => void;
    removeFromCart: (productData: IProduct) => void;

}

export const useCartStore = create<UserCartState>()(
    devtools(
        persist(
            (set, get) => ({
                productData: [],
                addToCart: (productData: IProduct) =>
                {
                    set((state) => ({
                        productData: [...state.productData, productData],
                    }));
                },
                removeFromCart: (productData: IProduct) =>
                {
                    set((state) => ({
                        productData: state.productData.filter(
                            (product) => product.id !== productData.id
                        ),
                    }));
                },

            }),
            {
                name: 'user-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);