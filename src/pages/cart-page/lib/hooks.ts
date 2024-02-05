import { IProduct, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket';
import { orderActions } from 'src/entities/order';
import { useEffect } from 'react';

type Props = {
   list: IProduct[];
};

export const useSetCount = ({ list }: Props) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(basketActions.getTotals());
      dispatch(orderActions.getTotals(list));
   }, [list, dispatch]);
};
