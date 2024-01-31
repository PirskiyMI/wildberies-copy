import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import { IProduct, Select } from 'src/shared';

type Props = {
   products: IProduct[];
   setProducts: Dispatch<SetStateAction<IProduct[]>>;
   className?: string;
};

export const ProductSelect: FC<Props> = ({ products, setProducts, className }) => {
   const classes = className ? className : undefined;
   const [sort, setSort] = useState('descending date');

   const getSortedList = (sort: string) => {
      if (sort === 'descending date') {
         setProducts([...products].sort((a, b) => a.id - b.id));
      } else if (sort === 'ascending date') {
         setProducts([...products].sort((a, b) => b.id - a.id));
      } else if (sort === 'descending price') {
         setProducts([...products].sort((a, b) => b.price - a.price));
      } else if (sort === 'ascending price') {
         setProducts([...products].sort((a, b) => a.price - b.price));
      }
   };

   useEffect(() => {
      getSortedList(sort);
   }, [sort, products]);

   return (
      <Select
         defaultValue="дата по убыванию"
         setSort={setSort}
         options={[
            { value: 'descending date', title: 'дата по убыванию' },
            { value: 'ascending date', title: 'дата по возрастанию' },
            { value: 'descending price', title: 'по убыванию цены' },
            { value: 'ascending price', title: 'по возрастанию цены' },
         ]}
         className={classes}
      />
   );
};
