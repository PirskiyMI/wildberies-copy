import { IProduct, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket';
import { orderActions } from 'src/entities/order';

type Props = {
   list: IProduct[];
};

export const useSetCount = ({ list }: Props) => {
   const dispatch = useAppDispatch();

   dispatch(basketActions.getTotals());
   dispatch(orderActions.getTotals(list));
};
