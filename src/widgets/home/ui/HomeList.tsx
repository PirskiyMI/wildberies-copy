import { FC } from 'react';
import { ProductCard, ProductList } from '../../../entities/product';
import { QuickView } from '../../../features/quick-view';
import { AddToCart } from '../../../features/add-to-cart';
import { IProductWithRating } from '../../../shared/lib';

type HomeListProps = {
   productList: IProductWithRating[];
};

export const HomeList: FC<HomeListProps> = ({ productList }) => {
   return (
      <ProductList>
         {productList.map((el) => (
            <ProductCard key={el.id} product={el}>
               <QuickView product={el} />
               <AddToCart
                  product={{ id: el.id, image: el.image, price: el.price, title: el.title }}
               />
            </ProductCard>
         ))}
      </ProductList>
   );
};
