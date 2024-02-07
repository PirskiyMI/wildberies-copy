import { FC, memo } from 'react';

import { Field, useInput } from 'src/shared';

import styles from './styles.module.scss';

export const FormCreateUser: FC = memo(() => {
   const {
      isDirty: nameIsDirty,
      errorText: nameErrorText,
      ...name
   } = useInput('', { isRequired: true, type: 'name' });
   const {
      isDirty: surnameIsDirty,
      errorText: surnameErrorText,
      ...surname
   } = useInput('', { isRequired: true, type: 'surname' });
   const {
      isDirty: mailIsDirty,
      errorText: mailErrorText,
      ...mail
   } = useInput('', { isRequired: true, type: 'email' });
   const {
      isDirty: telIsDirty,
      errorText: telErrorText,
      ...tel
   } = useInput('', { isRequired: true, type: 'tel' }, true);
   const {
      isDirty: identifyIsDirty,
      errorText: identifyErrorText,
      ...identify
   } = useInput('', { isRequired: true, type: 'ITN' }, false, true);

   return (
      <form
         className={styles.form}
         onSubmit={(e) => {
            e.preventDefault();
         }}>
         <div className={styles.form__top}>
            <Field title="Имя" errorText={`${nameIsDirty ? nameErrorText : ''}`} {...name} />
            <Field
               title="Фамилия"
               errorText={`${surnameIsDirty ? surnameErrorText : ''}`}
               {...surname}
            />
         </div>
         <div className={styles.form__bottom}>
            <Field title="Почта" errorText={`${mailIsDirty ? mailErrorText : ''}`} {...mail} />
            <Field title="Телефон" errorText={`${telIsDirty ? telErrorText : ''}`} {...tel} />
            <Field
               title="ИНН"
               errorText={`${identifyIsDirty ? identifyErrorText : ''}`}
               {...identify}
            />
         </div>
      </form>
   );
});
