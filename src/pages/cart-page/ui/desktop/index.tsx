import { useAppSelector } from 'src/shared';
import { isBasketEmptySelector } from 'src/entities/basket/basket-item';
import { CartPage } from './ui';

export const CartPageContainer = () => {
   const isBasketEmpty = useAppSelector(isBasketEmptySelector);

   return <CartPage isBasketEmpty={isBasketEmpty} />;
};
