import { FC, useEffect, useState } from 'react';
import { priceFormatter } from '../../lib';

type PriceProps = {
   price: number;
   className?: string;
};

export const Price: FC<PriceProps> = ({ price, className }) => {
   const [value, setValue] = useState(0);
   const result = priceFormatter(value);

   useEffect(() => {
      if (value > price) {
         const step = Math.ceil((value - price) / 200);
         setTimeout(() => {
            setValue((prev) => (prev -= step));
         }, 0);
      } else if (value < price) {
         const step = Math.ceil((price - value) / 200);
         setTimeout(() => {
            setValue((prev) => (prev += step));
         }, 0);
      }
   }, [value, price]);

   return <span className={className}>{result} сом</span>;
};
