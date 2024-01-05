import { FC } from 'react';

import styles from './styles.module.scss';

import { IProductWithRating } from '../../../../shared/lib';
import { ProductCard, ProductList } from '../../../../entities/product';
import {
   ProductAddToCart,
   ProductQuickView,
   ProductToggleToFavorite,
} from '../../../../features/product-actions';

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
                  addToFavoriteButton={<ProductToggleToFavorite product={el} />}>
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
