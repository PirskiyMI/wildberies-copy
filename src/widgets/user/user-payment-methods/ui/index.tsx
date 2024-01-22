import { FC, useState } from 'react';

import { Card, Icon, Modal, Section, useAppSelector } from 'src/shared';
import { UserPaymentCard } from 'src/entities/user';
import { AddCard, DeleteCard, SetMainCard } from 'src/features/user-actions';

import styles from './styles.module.scss';

export const UserPaymentMethods: FC = () => {
   const [isModal, setIsModal] = useState(false);
   const { paymentInfo } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const clickHandler = () => {
      setIsModal(true);
   };

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
                           toggleMain={<SetMainCard id={el.id} />}
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

         {isModal && (
            <Modal className={styles.modal} clickHandler={() => setIsModal(false)}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Привязка карты</h3>
                  <AddCard />
               </div>
            </Modal>
         )}
      </>
   );
};
