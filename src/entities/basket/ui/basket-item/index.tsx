import { FC, ReactNode, useEffect, useState } from 'react';

import { IProduct, useAppSelector, CartItemCard } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   product: IProduct;
   features: {
      Checkbox: ReactNode;
      Counter: ReactNode;
      Like: ReactNode;
      Delete: ReactNode;
   };
};

export const BasketItem: FC<Props> = ({
   product: { image, price, title, status },
   features: { Checkbox, Counter, Delete, Like },
}) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const [productPrice, setProductPrice] = useState(price);
   const { count, isChecked } = status!;

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
            <div className={styles.item__counter}>
               {Counter}
               <div className={styles.item__buttons}>
                  {Like}
                  {Delete}
               </div>
            </div>
         }
         isElementActive={isChecked}
         isDesktop={windowWidth >= 1024}
         className={styles.item}
      />
   );
};
