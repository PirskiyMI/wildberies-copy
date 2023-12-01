import { FC } from 'react';
import { AddToCart, QuickView } from '../../../../features/product-actions';
import { ProductCard, ProductList } from '../../../../entities/product';
import { IProductWithRating } from '../../../../shared/lib';
import { SearchIsEmpty } from '../../../../entities/search-is-empty';

type Props = {
   search?: string;
   productList: IProductWithRating[];
};

export const HomeList: FC<Props> = ({ productList, search }) => {
   if (!productList.length && search) {
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
   }

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
