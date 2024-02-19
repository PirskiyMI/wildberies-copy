import { FC, memo } from 'react';

import { priceFormatter } from '../../lib';
import { IPriceProps } from 'src/shared/lib/types/types-ui/price-types';


export const Price: FC<IPriceProps> = memo(({ price, className }) => {
   const result = priceFormatter(price);

   return <span className={className}>{result} сом</span>;
});
