import { useState, useEffect } from 'react';

export type validatorsValue = {
   isRequired?: boolean;
   type: 'tel' | 'email' | 'name' | 'ITN';
};

const useValidation = (value: string, { isRequired, type }: validatorsValue) => {
   const [errorText, setErrorText] = useState('');
   const nameRegExp = new RegExp(/[^a-яА-ЯёЁ]/g);
   const emailRegExp = new RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
   const telRegExp = new RegExp(/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/);
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
         default:
            break;
      }
      if (isRequired && !value) {
         switch (type) {
            case 'name':
               setErrorText('Укажите имя');
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

export default useValidation;
