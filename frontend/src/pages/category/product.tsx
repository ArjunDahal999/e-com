import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/spinner'
import { useGetProductById } from '@/hooks/useProducts'
import React from 'react'

const Product = ({productId}:{productId:string}) => {
    const {data:productData , isFetching} = useGetProductById(productId)
    console.log(productData)

    if(isFetching)
        {
            return <LoadingSpinner/>
        }
  return (
    <div className=' flex items-center justify-evenly'>
            <div className="">
            <h1 className=' text-3xl'>{productData?.name}</h1>
      <img src={productData?.images[0].url}/>
            </div>
            <div className="">
            <h1>{productData?.price}</h1>
      <h1>{productData?.size.name}</h1>
      <h1>{productData?.color.value}</h1>
      <h1>{productData?.category.name}</h1>
       <div className="">
        <Button>Add to Cart </Button>
        <Button>Buy Now </Button>
       </div>
            </div>
      </div>
  )
}

export default Product
