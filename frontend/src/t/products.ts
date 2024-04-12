export interface ICategory
{
  id: string;
  name: string;
  storeId: string;
  billboardId: string;
  createdAt: string;
  updatedAt: string;
  billboard?: Billboard
}


interface Billboard
{
  id: string;
  storeId: string;
  imageUrl: string;
  lable: string;
  createdAt: string;
  updatedAt: string;
}

interface IImage
{
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

interface IColor
{
  id: string;
  storeId: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

interface ISize
{
  id: string;
  storeId: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct
{
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  price: string;
  isFeature: boolean;
  isArchived: boolean;
  sizeId: string;
  colorId: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  images: IImage[];
  color: IColor;
  size: ISize;
}


export interface IGetProductsParams
{
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}
