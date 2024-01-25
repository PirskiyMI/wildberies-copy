import { useState, useEffect } from 'react';
import { useExpression } from './useExpression';

export type validatorsValue = {
   isRequired?: boolean;
   type: 'tel' | 'email' | 'name' | 'ITN' | 'card' | 'CVV/CVC' | 'date' | 'surname';
};

export const useValidation = (value: string, { isRequired, type }: validatorsValue) => {
   const [errorText, setErrorText] = useState('');
   const { cardRegExps, dateRegExp, emailRegExp, nameRegExp, telRegExp } = useExpression();
   const { code, masterCardRegExp, mirCardRegExp, visaCardRegExp } = cardRegExps;

   useEffect(() => {
      switch (type) {
         case 'name':
            !nameRegExp.test(value) ? setErrorText('') : setErrorText('Проверьте имя');
            break;
         case 'email':
            emailRegExp.test(value)
               ? setErrorText('')
               : setErrorText('Проверьте электронную почту');
            break;
         case 'tel':
            telRegExp.test(value) ? setErrorText('') : setErrorText('Проверьте номер телефона');
            break;
         case 'ITN':
            value.length === 14 ? setErrorText('') : setErrorText('Проверьте ИНН');
            break;
         case 'card':
            {
               value = value.split(' ').join('');
               masterCardRegExp.test(value) ||
               visaCardRegExp.test(value) ||
               mirCardRegExp.test(value)
                  ? setErrorText('')
                  : setErrorText('Проверьте номер карты');
            }
            break;
         case 'CVV/CVC':
            code.test(value) ? setErrorText('') : setErrorText('Проверьте код');
            break;
         case 'date': {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() - 2000;
            const currentMonth = currentDate.getMonth() + 1;
            const month = Number(value.slice(0, 2));
            const year = Number(value.slice(2, 4));

            if (currentYear > year) {
               setErrorText('Неверная дата');
               break;
            } else if ((currentYear === year && currentMonth > month) || month > 12) {
               setErrorText('Неверная дата');
               break;
            }

            !dateRegExp.test(value) ? setErrorText('') : setErrorText('Неверная дата');
            break;
         }
         default:
            break;
      }
      if (isRequired && !value) {
         switch (type) {
            case 'name':
               setErrorText('Укажите имя');
               break;
               case 'surname':
               setErrorText('Укажите фамилию');
               break;
            case 'email':
               setErrorText('Укажите электронную почту');
               break;
            case 'tel':
               setErrorText('Укажите номер телефона');
               break;
            case 'ITN':
               setErrorText('Укажите ИНН');
               break;
            default:
               break;
         }
      }
   }, [value]);

   return { errorText };
};
