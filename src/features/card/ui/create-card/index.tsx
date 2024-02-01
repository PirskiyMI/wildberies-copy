import { FC, FormEvent } from 'react';

import {
   Button,
   Field,
   cardNumberFormatter,
   dateFormatter,
   useAppDispatch,
   useInput,
} from 'src/shared';
import { addCard } from 'src/entities/user';

import styles from './styles.module.scss';

type Props = {
   closePopUp?: () => void;
};

export const CreateCard: FC<Props> = ({ closePopUp }) => {
   const {
      errorText: cartErrorText,
      isDirty: cartIsDirty,
      value: cardValue,
      ...cart
   } = useInput('', { isRequired: true, type: 'card' });
   const {
      errorText: dateErrorText,
      isDirty: dateIsDirty,
      value: dateValue,
      ...date
   } = useInput('', { isRequired: true, type: 'date' });
   const {
      errorText: codeErrorText,
      isDirty: codeIsDirty,
      value: codeValue,
      ...code
   } = useInput('', { isRequired: true, type: 'CVV/CVC' });
   const isDirty = cartIsDirty || dateIsDirty || codeIsDirty;
   const isEmpty = cardValue || dateValue || codeValue;
   const dispatch = useAppDispatch();

   const cardNumber = cardNumberFormatter(cardValue);
   const cardDate = dateFormatter(dateValue);

   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
         addCard({
            cardNumber: cardValue,
            code: codeValue,
            id: Date.now(),
            date: dateValue,
            isMain: false,
         }),
      );
      if (closePopUp) closePopUp();
   };

   return (
      <form className={styles.form} onSubmit={submitHandler}>
         <div className={styles.form__top}>
            <ul className={styles.form__list}>
               <li className={styles.form__item}>
                  <img
                     className={styles.form__image}
                     src="https://cdn.worldvectorlogo.com/logos/visa-10.svg"
                     alt="Карта Visa"
                  />
               </li>
               <li className={styles.from__item}>
                  <img
                     className={styles.form__image}
                     src="https://evgenykatyshev.ru/projects/mir-logo/mir-logo-h14px.svg"
                     alt="Карта Мир"
                  />
               </li>
               <li className={styles.form__item}>
                  <img
                     className={styles.form__image}
                     src="https://cdn.iconscout.com/icon/free/png-256/free-mastercard-3521564-2944982.png"
                     alt="Карта Master Card"
                  />
               </li>
            </ul>
            <ul className={styles.form__fields}>
               <li className={`${styles.form__field} ${styles.form__field_big}`}>
                  <Field
                     title="Номер карты"
                     errorText={cartIsDirty ? cartErrorText : ''}
                     value={cardNumber}
                     {...cart}
                  />
               </li>
               <li className={styles.form__field}>
                  <Field
                     title="ММ/ГГ"
                     errorText={dateIsDirty ? dateErrorText : ''}
                     value={cardDate}
                     {...date}
                  />
               </li>
               <li className={styles.form__field}>
                  <Field
                     title="CVV/CVC"
                     errorText={codeIsDirty ? codeErrorText : ''}
                     value={codeValue}
                     {...code}
                  />
               </li>
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
