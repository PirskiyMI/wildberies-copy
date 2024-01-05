import { FC } from 'react';

import { IProductWithRating, useAppDispatch } from '../../../../shared/lib';
import { openModal, setProductToModal } from '../../../../shared/model';

import { addProductToVisited } from '../../model/slices/cartSliderSlice';

type Props = {
   product: IProductWithRating;
};

export const ProductQuickView: FC<Props> = ({ product }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(setProductToModal(product));
      dispatch(addProductToVisited(product));
      dispatch(openModal());
   };
   return <div onClick={clickHandler}>Быстрый просмотр</div>;
};
