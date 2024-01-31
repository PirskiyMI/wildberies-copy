import { useState, useEffect } from 'react';
import {
   cardCodeExpression,
   cardValidityExpression,
   mailExpression,
   masterCardExpression,
   mirCardExpression,
   nameExpression,
   phoneExpression,
   visaExpression,
} from '..';
import { IValidators } from '../types/validators-type';

export const useValidation = (value: string, { isRequired, type }: IValidators) => {
   const [errorText, setErrorText] = useState('');

   useEffect(() => {
      switch (type) {
         case 'name':
            !nameExpression.test(value) ? setErrorText('') : setErrorText('Проверьте имя');
            break;
         case 'email':
            mailExpression.test(value)
               ? setErrorText('')
               : setErrorText('Проверьте электронную почту');
            break;
         case 'tel':
            phoneExpression.test(value)
               ? setErrorText('')
               : setErrorText('Проверьте номер телефона');
            break;
         case 'ITN':
            value.length === 14 ? setErrorText('') : setErrorText('Проверьте ИНН');
            break;
         case 'card':
            {
               value = value.split(' ').join('');
               masterCardExpression.test(value) ||
               visaExpression.test(value) ||
               mirCardExpression.test(value)
                  ? setErrorText('')
                  : setErrorText('Проверьте номер карты');
            }
            break;
         case 'CVV/CVC':
            cardCodeExpression.test(value) ? setErrorText('') : setErrorText('Проверьте код');
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

            !cardValidityExpression.test(value) ? setErrorText('') : setErrorText('Неверная дата');
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
