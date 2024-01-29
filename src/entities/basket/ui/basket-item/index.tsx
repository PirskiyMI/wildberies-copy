import { FC, ReactNode, useEffect, useState } from 'react';

import { IProductWithStatus, useAppSelector, CartItemCard } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProductWithStatus;
   features: {
      Checkbox: ReactNode;
      Counter: ReactNode;
      Like: ReactNode;
      Delete: ReactNode;
   };
};

export const BasketItem: FC<Props> = ({ product, features }) => {
   const { image, price, status, title } = product;
   const { Checkbox, Counter } = features;
   const { count } = status;

   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const [productPrice, setProductPrice] = useState(price);

   useEffect(() => {
      setProductPrice(price * count);
   }, [count, price]);

   return (
      <CartItemCard
         image={image}
         price={productPrice}
         title={title}
         checkbox={Checkbox}
         counter={
            <div className={styles.counter}>
               {Counter}
               <div className={styles.counter__buttons}></div>
            </div>
         }
         isDesktop={windowWidth >= 1024}
      />
   );
};
