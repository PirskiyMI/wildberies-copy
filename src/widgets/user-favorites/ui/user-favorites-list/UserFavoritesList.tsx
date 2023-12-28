import { FC } from 'react';
import { IProductWithRating } from '../../../../shared/lib';
import { ProductCard, ProductList } from '../../../../entities/product';
import { AddToCart, QuickView, RemoveFromFavorite } from '../../../../features/product-actions';
import styles from './UserFavoritesList.module.scss';

type Props = {
   products: IProductWithRating[];
};

export const UserFavoritesList: FC<Props> = ({ products }) => {
   return (
      <ProductList>
         {products.map((el) => (
            <div key={el.id} className={styles.item}>
               <ProductCard product={el} addToFavoriteButton={<RemoveFromFavorite id={el.id} />}>
                  <QuickView product={el} />
                  <AddToCart
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
