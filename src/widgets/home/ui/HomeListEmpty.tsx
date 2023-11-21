import { FC } from 'react';
import { SearchIsEmpty } from '../../../entities/search-is-empty';
import { IProductWithRating } from '../../../shared/lib';
import { ProductCard, ProductList } from '../../../entities/product';
import { QuickView } from '../../../features/quick-view';
import { AddToCart } from '../../../features/add-to-cart';

type Props = {
   search: string;
   productList: IProductWithRating[];
};

export const HomeListEmpty: FC<Props> = ({ search, productList }) => {
   return (
      <>
         <SearchIsEmpty search={search} />
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
      </>
   );
};
