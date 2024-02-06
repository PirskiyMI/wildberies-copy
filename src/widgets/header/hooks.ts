import { useGetBasketTotals } from 'src/entities/basket/basket-total-count/hooks';
import { useAppSelector } from 'src/shared';

export const useGetCount = () => {
   const { list } = useAppSelector((state) => state.basketReducer);
   useGetBasketTotals(list);
   const { totalCount } = useAppSelector((state) => state.basketTotalsReducer);

   return { totalCount };
};
