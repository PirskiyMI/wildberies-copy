import { FC } from 'react';

import { getNoun } from 'src/shared';

import { IBasketTotalCount } from './types';
import { BasketTotalCount } from '../ui';

export const BasketTotalCountContainer: FC<IBasketTotalCount> = (props) => {
   const noun = getNoun(props.count, 'товар', 'товара', 'товаров');

   return <BasketTotalCount noun={noun} {...props} />;
};
