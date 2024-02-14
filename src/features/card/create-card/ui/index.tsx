import { FC } from 'react';

import { Button, Field } from 'src/shared';

import styles from './styles.module.scss';
import { useCardForm, useCreateCard } from '../lib/hooks';
import { ICreateCardProps } from '../lib/types';
import { cardsInfo } from '../constants';

export const CreateCard: FC<ICreateCardProps> = ({ closePopUp }) => {
   const {
      fields,
      fieldsValue: { cardValue, codeValue, dateValue },
      validate: { isDirty, isEmpty },
   } = useCardForm();
   const createCard = useCreateCard({
      cardInfo: { number: cardValue, date: dateValue, code: codeValue },
      closePopUp,
   });

   return (
      <form className={styles.form} onSubmit={createCard}>
         <div className={styles.form__top}>
            <ul className={styles.form__list}>
               {cardsInfo.map(({ img, alt }) => (
                  <li key={alt} className={styles.form__item}>
                     <img className={styles.form__image} src={img} alt={alt} />
                  </li>
               ))}
            </ul>
            <ul className={styles.form__fields}>
               {fields.map(({ id, title, value, errorText, ...el }) => (
                  <li key={id} className={styles.form__field}>
                     <Field
                        title={title}
                        errorText={errorText ? errorText : ''}
                        value={value}
                        {...el}
                     />
                  </li>
               ))}
            </ul>
         </div>
         <div className={styles.form__bottom}>
            <p className={styles.from__text}>
               Для проверки карты, мы не будем списывать небольшую сумму денег
            </p>
            <Button className={styles.form__button} disabled={isDirty || !isEmpty}>
               Привязать
            </Button>
         </div>
      </form>
   );
};
