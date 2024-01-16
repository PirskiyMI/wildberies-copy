import { FC } from 'react';

import { IProductWithRating, openModal, setProductToModal, useAppDispatch } from 'src/shared';

import { addProductToVisited } from '../..';

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
