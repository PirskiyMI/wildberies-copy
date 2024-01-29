import { FC } from 'react';

import { IProductWithRating } from 'src/shared';
import { ProductCard } from 'src/entities/product';
import { AddProductToCart, ProductQuickView, ToggleProductToFavorite } from 'src/features/product';

import styles from './styles.module.scss';

type Props = {
   products: IProductWithRating[];
};

export const ProductList: FC<Props> = ({ products }) => {
   return (
      <ul className={styles.list}>
         {products.map((el) => (
            <li className={styles.list__item}>
               <ProductCard
                  product={el}
                  FavoriteButton={<ToggleProductToFavorite product={el} />}
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
