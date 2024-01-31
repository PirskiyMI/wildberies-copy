import { FC } from 'react';

import { IProduct, openModal, setProductToModal, useAppDispatch } from 'src/shared';
import { addProductToVisited } from 'src/entities/product';

type Props = {
   product: IProduct;
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