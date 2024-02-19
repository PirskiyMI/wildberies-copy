import { useAppSelector } from 'src/shared';
import { Basket } from './ui';
import { basketListSelector, basketTotalsSelector } from 'src/entities/basket/basket-item';

export const BasketContainer = () => {
   const list = useAppSelector(basketListSelector);
   const { count, price } = useAppSelector(basketTotalsSelector);

   return <Basket list={list} count={count} price={price} />;
};
