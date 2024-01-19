import { FC, useState } from 'react';

import styles from './styles.module.scss';

import { Modal, Section, useAppSelector } from 'src/shared';
import { PaymentMethod } from 'src/entities/payment-method';
import { AddCard, DeleteCard, SetButtonMainCard } from 'src/features/user-actions';

export const UserPaymentMethods: FC = () => {
   const [isModal, setIsModal] = useState(false);
   const { paymentInfo } = useAppSelector((state) => state.userReducer);

   const clickHandler = () => {
      setIsModal(true);
   };

   return (
      <Section className={styles.payments}>
         <h2 className={styles.payments__title}>Способы оплаты</h2>
         <ul className={styles.payments__list}>
            {paymentInfo.map((el) => (
               <li
                  key={el.id}
                  className={
                     el.isMain
                        ? `${styles.payments__item} ${styles.payments__item_main}`
                        : styles.payments__item
                  }>
                  <PaymentMethod
                     number={el.cardNumber}
                     deleteButton={<DeleteCard id={el.id} />}
                     toggleMain={el.isMain ? <div>Основной</div> : <SetButtonMainCard id={el.id} />}
                  />
               </li>
            ))}
            <li className={styles.payments__item} onClick={clickHandler}>
               Привязать карту
            </li>
         </ul>
         {isModal && (
            <Modal className={styles.modal} clickHandler={() => setIsModal(false)}>
               <div className={styles.modal__body}>
                  <h3 className={styles.modal__title}>Привязка карты</h3>
                  <AddCard />
               </div>
            </Modal>
         )}
      </Section>
   );
};
