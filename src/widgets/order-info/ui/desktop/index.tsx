import { memo } from 'react';

import { useAppSelector } from 'src/shared';
import { orderTotalsSelector } from 'src/entities/basket/basket-item';

import { OrderInfo } from './ui';

export const OrderInfoContainer = memo(() => {
   const { count, price } = useAppSelector(orderTotalsSelector);

   return <OrderInfo count={count} price={price} />;
});
