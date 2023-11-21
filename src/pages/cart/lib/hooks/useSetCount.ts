import { useEffect } from 'react';

import { IProductWithStatus, useAppDispatch } from '../../../../shared/lib';
import { setTotalCount, setTotalPrice } from '../../../../entities/basket';

import { setCount, setPrice } from '../../../../entities/order';

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
         totalPrice += el.price;
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
