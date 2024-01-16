import { FC, ReactNode } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   number: string;
   deleteButton: ReactNode;
   toggleMain?: ReactNode;
};

export const PaymentMethod: FC<Props> = ({ number, deleteButton, toggleMain }) => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const maskedNumber = number
      .split(' ')
      .map((el, index) => (index !== 3 ? '⋅⋅⋅⋅' : el))
      .join(' ');

   if (windowWidth >= 1024) {
      return (
         <article className={styles.method}>
            <div className={styles.method__buttons}>
               {toggleMain && <div className={styles.button__toggle}>{toggleMain}</div>}
               <div className={styles.button__delete}>{deleteButton}</div>
            </div>
            <div className={styles.method__info}>
               <div className={styles.method__text}>{maskedNumber}</div>
               <div className={styles.method__image}></div>
            </div>
         </article>
      );
   }

   return (
      <article className={styles.method}>
         <div className={styles.method__info}>
            <div className={styles.method__image}></div>
            <div className={styles.method__text}>{maskedNumber}</div>
         </div>
         <div className={styles.button__delete}>{deleteButton}</div>
      </article>
   );
};
