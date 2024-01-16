import { FC } from 'react';

import { toggleToFavorite } from '../../../../widgets/home/model';

import { addToFavorites, removeFromFavorites } from '../../../../entities/user';

import { FavoriteButton } from '../../../../shared/ui';
import { IProductWithRating, useAppDispatch } from '../../../../shared/lib';

type Props = {
   product: IProductWithRating;
};

export const ProductToggleToFavorite: FC<Props> = ({ product }) => {
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
