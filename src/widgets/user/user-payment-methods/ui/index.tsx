import { FC, useState } from 'react';

import { Card, Icon, Section, useAppSelector } from 'src/shared';
import { UserPaymentCard } from 'src/entities/user';
import { DeleteCard, SetCard } from 'src/features/card/ui';

import styles from './styles.module.scss';
import { UserModal } from './user-modal';

export const UserPaymentMethods: FC = () => {
   const [isModal, setIsModal] = useState(false);
   const { paymentInfo } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const clickHandler = () => setIsModal(true);
   const closeModal = () => setIsModal(false);

   return (
      <>
         <Section className={styles.payments} title="Способы оплаты">
            <ul className={styles.payments__list}>
               {paymentInfo.map((el) => (
                  <li key={el.id} className={styles.payments__item}>
                     {el.isMain ? (
                        <UserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DeleteCard id={el.id} />}
                           isDesktop={windowWidth >= 1024}
                           className={styles.payments__card}
                        />
                     ) : (
                        <UserPaymentCard
                           cardNumber={el.cardNumber}
                           deleteButton={<DeleteCard id={el.id} />}
                           toggleMain={<SetCard id={el.id} />}
                           isDesktop={windowWidth >= 1024}
                           className={styles.payments__card}
                        />
                     )}
                  </li>
               ))}

               <li onClick={clickHandler} className={styles.payments__item}>
                  <Card className={styles.payments__card}>
                     <div className={styles.payments__body}>
                        <Icon icon="card" className={styles.payments__icon} />
                        <span className={styles.payments__label}>Привязать карту</span>
                     </div>
                  </Card>
               </li>
            </ul>
         </Section>

         {isModal && <UserModal closeModal={closeModal} />}
      </>
   );
};
