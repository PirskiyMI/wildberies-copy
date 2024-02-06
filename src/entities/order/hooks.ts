import { useEffect } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';
import { orderActions } from 'src/entities/order';

export const useGetOrderTotals = (list: IProduct[]) => {
   const { getTotals } = orderActions;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getTotals(list));
   }, [list, getTotals, dispatch]);
};
