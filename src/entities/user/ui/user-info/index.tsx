import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { phoneFormatter, useAppSelector } from '../../../../shared/lib';

const UserInfoTop: FC = () => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const firstLatter = name[0];

   if (windowWidth >= 1024) {
      return (
         <div className={styles.user__top}>
            <div className={styles.user__logo}>{firstLatter}</div>
            <h2 className={styles.user__name}>{name}</h2>
         </div>
      );
   }

   return (
      <div className={styles.user__top}>
         <div className={styles.user__logo}>{firstLatter}</div>
         <div className={styles.user__info}>
            <h2 className={styles.user__name}>{name}</h2>
            <div className={styles.user__text}>
               <UserInfoBottom />
               <Link className={styles.user__link} to={'#'}>
                  Личные данные
               </Link>
            </div>
         </div>
      </div>
   );
};
const UserInfoBottom: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { tel } = useAppSelector((state) => state.userReducer);
   const phoneNumber = phoneFormatter(tel);

   if (windowWidth >= 1024) {
      return (
         <p className={styles.user__bottom}>
            Телефон <span className={styles.user__phone}>{phoneNumber}</span>
         </p>
      );
   }

   return (
      <p className={styles.user__bottom}>
         <span className={styles.user__phone}>{phoneNumber}</span>
      </p>
   );
};

export const UserInfo: FC = () => {
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   return (
      <div className={styles.user}>
         <UserInfoTop />
         {windowWidth >= 1024 && <UserInfoBottom />}
      </div>
   );
};
