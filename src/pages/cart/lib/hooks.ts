import { useEffect } from 'react';

import { IProductWithStatus, useAppDispatch } from 'src/shared';
import { setTotalCount, setTotalPrice } from 'src/entities/basket';
import { setCount, setPrice } from 'src/entities/order';

type Props = {
   list: IProductWithStatus[];
};

export const useSetCount = ({ list }: Props) => {
   const dispatch = useAppDispatch();

   return useEffect(() => {
      let productsCount = 0;
      let productsPrice = 0;
      let totalCount = 0;
      let totalPrice = 0;

      list.forEach((el) => {
         totalCount += el.status.count;
         totalPrice += Math.ceil(el.price * el.status.count);
         if (el.status.isChecked) {
            productsCount += el.status.count;
            productsPrice += Math.ceil(el.price * el.status.count);
         }
      });

      dispatch(setTotalCount(totalCount));
      dispatch(setTotalPrice(totalPrice));
      dispatch(setCount(productsCount));
      dispatch(setPrice(productsPrice));
   }, [list, dispatch]);
};
