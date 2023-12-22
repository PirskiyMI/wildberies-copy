import { FC } from 'react';
import { FavoriteButton } from '../../../../shared/ui';
import { IProductWithRating, useAppDispatch } from '../../../../shared/lib';
import { addToFavorites, removeFromFavorites } from '../../../../entities/user';
import { toggleToFavorite } from '../../../../widgets/home/model/productListSlice';

type Props = {
   product: IProductWithRating;
};

export const ToggleToFavorite: FC<Props> = ({ product }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      if (!product.isFavorite) {
         dispatch(toggleToFavorite(product.id));
         dispatch(addToFavorites(product));
      } else {
         dispatch(toggleToFavorite(product.id));
         dispatch(removeFromFavorites(product.id));
      }
   };

   return <FavoriteButton clickHandler={clickHandler} />;
};
