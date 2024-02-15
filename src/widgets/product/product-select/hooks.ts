import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { IProduct } from 'src/shared';

interface IProps {
   products: IProduct[];
   setProducts: Dispatch<SetStateAction<IProduct[]>>;
}

export const useGetSortedList = ({ products, setProducts }: IProps) => {
   const [sort, setSort] = useState('descending date');

   const getSortedList = (sort: string) => {
      if (sort === 'descending date') {
         setProducts([...products].sort((a, b) => a.id - b.id));
      } else if (sort === 'ascending date') {
         setProducts([...products].sort((a, b) => b.id - a.id));
      } else if (sort === 'descending price') {
         setProducts([...products].sort((a, b) => +b.price - +a.price));
      } else if (sort === 'ascending price') {
         setProducts([...products].sort((a, b) => +a.price - +b.price));
      }
   };

   useEffect(() => {
      getSortedList(sort);
   }, [sort, products]);

   return { setSort };
};
