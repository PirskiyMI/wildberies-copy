import { useAppSelector } from 'src/shared';

export const useFavorites = (productId: number) => {
   const { favorites } = useAppSelector((state) => state.productFavoritesReducer);

   const inFavorites = Boolean(favorites.find(({ id }) => id === productId));

   return { inFavorites };
};
