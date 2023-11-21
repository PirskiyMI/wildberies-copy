import { FC } from 'react';
import { openModal, setProductToModal } from '../../../shared/model';
import { IProductWithRating, useAppDispatch } from '../../../shared/lib';
import { addProductToVisited } from '../../../entities/product';

type QuickViewProps = {
   product: IProductWithRating;
};

export const QuickView: FC<QuickViewProps> = ({ product }) => {
   const dispatch = useAppDispatch();

   const showHandler = () => {
      dispatch(setProductToModal(product));
      dispatch(addProductToVisited(product));
      dispatch(openModal());
   };
   return <div onClick={showHandler}>Быстрый просмотр</div>;
};
