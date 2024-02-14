import { FC, useEffect, useState } from 'react';

import { IProduct, useAppSelector } from 'src/shared';

import { IProductListProps } from './types';
import { ProductList, ProductListIsEmpty } from '../ui';

export const ProductListContainer: FC<IProductListProps> = ({ products, ...props }) => {
   const { value } = useAppSelector((state) => state.searchReducer);
   const [productsList, setProductsList] = useState<IProduct[]>(products);

   useEffect(() => {
      if (value.trim().length === 0) {
         setProductsList(products);
      } else {
         const sortedProducts = products.filter((el) =>
            el.title.toLowerCase().includes(value.toLowerCase()),
         );
         setProductsList(sortedProducts);
      }
   }, [value, products]);

   return (
      <>
         {productsList ? (
            <ProductList products={productsList} {...props} />
         ) : (
            <ProductListIsEmpty searchValue={value} />
         )}
      </>
   );
};
