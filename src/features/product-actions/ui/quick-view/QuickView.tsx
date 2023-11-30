import { FC } from 'react';
import { IProductWithRating, useAppDispatch } from '../../../../shared/lib';
import { openModal, setProductToModal } from '../../../../shared/model';
import { addProductToVisited } from '../../../../entities/product';

type Props = {
   product: IProductWithRating;
};

export const QuickView: FC<Props> = ({ product }) => {
   const dispatch = useAppDispatch();

   const showHandler = () => {
      dispatch(setProductToModal(product));
      dispatch(addProductToVisited(product));
      dispatch(openModal());
   };
   return <div onClick={showHandler}>Быстрый просмотр</div>;
};
