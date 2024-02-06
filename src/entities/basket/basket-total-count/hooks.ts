import { useEffect } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';

import { basketTotalsActions } from './model';

export const useGetBasketTotals = (list: IProduct[]) => {
   const { getTotals } = basketTotalsActions;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getTotals(list));
   }, [list, getTotals, dispatch]);
};
