import { FC } from 'react';

import { Card, Icon, Section, useAppSelector, usePopUp } from 'src/shared';
import { UserPaymentCardContainer, userPaymentInfoSelector } from 'src/entities/user';
import { DeleteCard } from 'src/features/card/delete-card';
import { SetCard } from 'src/features/card/set-main-card';

import styles from './styles.module.scss';
import { PaymentMethodPopUp } from './pop-up';

export const ProfilePaymentMethod: FC = () => {
   const paymentInfo = useAppSelector(userPaymentInfoSelector);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);

   const { isPopUpOpen, openPopUp, closePopUp } = usePopUp();

   return (
      <>
         <Section className={styles.payments} title="Способы оплаты">
            <ul className={styles.payments__list}>
               {paymentInfo.map((el) => (
                  <li key={el.id} className={styles.payments__item}>
                     {el.isMain ? (
                        <UserPaymentCardContainer
                           cardNumber={el.cardNumber}
                           UIType="full"
                           deleteButton={<DeleteCard id={el.id} />}
                           isDesktop={windowWidth >= 1024}
                           className={styles.payments__card}
                        />
                     ) : (
                        <UserPaymentCardContainer
                           cardNumber={el.cardNumber}
                           UIType="full"
                           deleteButton={<DeleteCard id={el.id} />}
                           switchMainCardButton={<SetCard id={el.id} />}
                           isDesktop={windowWidth >= 1024}
                           className={styles.payments__card}
                        />
                     )}
                  </li>
               ))}
               <li onClick={openPopUp} className={styles.payments__item}>
                  <Card className={styles.payments__card}>
                     <div className={styles.payments__body}>
                        <Icon icon="card" className={styles.payments__icon} />
                        <span className={styles.payments__label}>Привязать карту</span>
                     </div>
                  </Card>
               </li>
            </ul>
         </Section>

         {isPopUpOpen && <PaymentMethodPopUp closePopUp={closePopUp} />}
      </>
   );
};
