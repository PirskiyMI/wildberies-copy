import { FC } from 'react';

import { IProductWithRating } from 'src/shared';
import { ProductCard, ProductList } from 'src/entities/product';
import {
   AddProductToCart,
   ProductQuickView,
   RemoveProductFromFavorites,
} from 'src/features/product';

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
                  addToFavoriteButton={<RemoveProductFromFavorites product={el} />}>
                  <ProductQuickView product={el} />
                  <AddProductToCart
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
