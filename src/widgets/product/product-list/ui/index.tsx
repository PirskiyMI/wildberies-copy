import { FC } from 'react';

import { IProduct } from 'src/shared';
import { ProductCard } from 'src/entities/product';
import {
   AddProductToCart,
   ProductQuickView,
   RemoveProductFromFavorites,
   ToggleProductToFavorite,
} from 'src/features/product';

import styles from './styles.module.scss';

type Props = {
   products: IProduct[];
   isFavoriteList?: boolean;
};

export const ProductList: FC<Props> = ({ products, isFavoriteList = false }) => {
   return (
      <ul className={styles.list}>
         {products.map((el) => (
            <li key={el.id} className={styles.list__item}>
               <ProductCard
                  product={el}
                  FavoriteButton={
                     isFavoriteList ? (
                        <RemoveProductFromFavorites productId={el.id} />
                     ) : (
                        <ToggleProductToFavorite product={el} />
                     )
                  }
                  ModalButton={<ProductQuickView product={el} />}
                  CartButton={
                     <AddProductToCart
                        product={{
                           id: el.id,
                           image: el.image,
                           price: el.price,
                           title: el.title,
                           isFavorite: el.isFavorite,
                        }}
                     />
                  }
               />
            </li>
         ))}
      </ul>
   );
};
