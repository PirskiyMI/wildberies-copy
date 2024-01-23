import { FC } from 'react';

import { Button, Icon, Modal, Section } from 'src/shared';
import { AddUserCard, SetUserMainCardInBasket } from 'src/features/user';

import styles from './styles.module.scss';

type Props = {
   type: 'select' | 'form';
   cardList: { id: number; cardNumber: string; isMain: boolean }[];
   toggleType: () => void;
   closeModal: () => void;
};

export const CartModal: FC<Props> = ({ type, cardList, closeModal, toggleType }) => {
   return (
      <Modal clickHandler={closeModal} className={styles.modal}>
         <Section title={type === 'form' ? 'Привязать карту' : 'Способ оплаты'}>
            {type === 'form' ? (
               <>
                  <AddUserCard />
                  <Button onClick={toggleType} className={styles.modal__button}>
                     Выбрать способ оплаты
                  </Button>
               </>
            ) : (
               <ul className={styles.modal__list}>
                  {cardList.map((el) => (
                     <li key={el.id} className={styles.modal__item}>
                        <SetUserMainCardInBasket cardNumber={el.cardNumber} id={el.id} />
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
      </Modal>
   );
};
