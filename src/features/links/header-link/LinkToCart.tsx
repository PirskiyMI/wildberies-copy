import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.scss';
import { Icon } from '../../../shared/ui';
import { useAppSelector } from '../../../shared/lib';

export const LinkToCart: FC = () => {
   const { count } = useAppSelector((state) => state.basketInfoReducer);

   return (
      <Link to="/cart" className={styles.link__link}>
         <div className={styles.link__body}>
            <span className={styles.link__wrapper}>
               <Icon icon={'cart'} className={styles.link__icon} />
               {count > 0 && <div className={styles.link__count}>{count}</div>}
            </span>
            <span className={styles.link__label}>Корзина</span>
         </div>
      </Link>
   );
};
