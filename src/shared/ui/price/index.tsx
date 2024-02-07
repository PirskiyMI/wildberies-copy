import { FC, memo } from 'react';

import { priceFormatter } from '../../lib';

type PriceProps = {
   price: number;
   className?: string;
};

export const Price: FC<PriceProps> = memo(({ price, className }) => {
   const result = priceFormatter(price);

   return <span className={className}>{result} сом</span>;
});
