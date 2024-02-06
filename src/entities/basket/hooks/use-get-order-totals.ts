import { useEffect } from 'react';

import { IProduct, useAppDispatch } from 'src/shared';
import { orderActions } from 'src/entities/order';

type Props = {
   list: IProduct[];
};

export const useGetOrderTotals = ({ list }: Props) => {
   const { getTotals } = orderActions;
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getTotals(list));
   }, [list, getTotals, dispatch]);
};
