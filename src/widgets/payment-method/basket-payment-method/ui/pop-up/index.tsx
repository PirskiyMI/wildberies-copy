import { FC } from 'react';

import { Button, Icon, PopUp, Section } from 'src/shared';

import styles from './styles.module.scss';
import { CreateCard } from 'src/features/card/create-card';
import { SetCardInBasket } from 'src/features/card/set-main-card';

type Props = {
   type: 'select' | 'form';
   cardList: { id: number; cardNumber: string; isMain: boolean }[];
   toggleType: () => void;
   closePopUp: () => void;
};

export const PaymentMethodPopUp: FC<Props> = ({ type, cardList, closePopUp, toggleType }) => {
   return (
      <PopUp closePopUp={closePopUp} className={styles.modal}>
         <Section title={type === 'form' ? 'Привязать карту' : 'Способ оплаты'}>
            {type === 'form' ? (
               <>
                  <CreateCard closePopUp={closePopUp} />
                  <Button onClick={toggleType} className={styles.modal__button}>
                     Выбрать способ оплаты
                  </Button>
               </>
            ) : (
               <ul className={styles.modal__list}>
                  {cardList.map((el) => (
                     <li key={el.id} className={styles.modal__item}>
                        <SetCardInBasket cardNumber={el.cardNumber} id={el.id} />
                     </li>
                  ))}
                  <li onClick={toggleType} className={styles.modal__item}>
                     <div className={styles.modal__switcher}>
                        <Icon icon="card" className={styles.modal__icon} />
                        <span>Привязать карту</span>
                     </div>
                  </li>
               </ul>
            )}
         </Section>
      </PopUp>
   );
};
