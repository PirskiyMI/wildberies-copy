import { Dispatch, FC, SetStateAction } from 'react';

import { DesktopSelect, IProduct } from 'src/shared';

import { options } from './constants';
import { useGetSortedList } from './hooks';

type Props = {
   products: IProduct[];
   setProducts: Dispatch<SetStateAction<IProduct[]>>;
   className?: string;
};

export const ProductSelect: FC<Props> = ({ products, setProducts, className }) => {
   const { setSort } = useGetSortedList({ products, setProducts });

   return (
      <DesktopSelect
         defaultValue="дата по убыванию"
         setSort={setSort}
         options={options}
         className={className}
      />
   );
};
