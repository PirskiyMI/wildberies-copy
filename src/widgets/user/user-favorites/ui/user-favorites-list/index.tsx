import { FC } from 'react';

import { IProductWithRating } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import {
   ProductAddToCart,
   ProductQuickView,
   ProductRemoveFromFavorites,
} from 'src/features/product-actions';

import styles from './styles.module.scss';

type Props = {
   products: IProductWithRating[];
};

export const UserFavoritesList: FC<Props> = ({ products }) => {
   return (
      <ProductList>
         {products.map((el) => (
            <div key={el.id} className={styles.item}>
               <ProductCard
                  product={el}
                  addToFavoriteButton={<ProductRemoveFromFavorites product={el} />}>
                  <ProductQuickView product={el} />
                  <ProductAddToCart
                     product={{
                        id: el.id,
                        image: el.image,
                        price: el.price,
                        title: el.title,
                        isFavorite: el.isFavorite,
                     }}
                  />
               </ProductCard>
            </div>
         ))}
      </ProductList>
   );
};
