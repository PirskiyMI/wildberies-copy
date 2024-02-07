import { ChangeEvent, useState } from 'react';
import { useValidation } from './use-validation';
import { IValidators, phoneFormatter } from '..';

const phoneRegExp = new RegExp(/[а-яА-ЯёЁa-zA-Z]/gi);

export const useInput = (
   initialValue: string,
   validators: IValidators,
   isPhone?: boolean,
   isNumber?: boolean,
) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setDirty] = useState(false);
   const validation = useValidation(value, validators);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDirty(false);
      if (isPhone) {
         const value = e.target.value.replace(/[^0-9]/g, '');
         if (!e.target.value.match(phoneRegExp) && value.length <= 11) {
            setValue(e.target.value);
         } else if (e.target.value.length === 0) {
            setValue('');
         }
      } else if (isNumber) {
         const value = e.target.value.replace(/[^0-9]/g, '');
         if (Number(e.target.value) && value.length <= 12) {
            setValue(e.target.value);
         } else if (e.target.value.length === 0) {
            setValue('');
         }
      } else if (validators.type === 'card') {
         if (e.target.value.length <= 23) {
            setValue(e.target.value);
         }
      } else if (validators.type === 'date' || validators.type === 'CVV/CVC') {
         if (e.target.value.length <= 4) {
            setValue(e.target.value);
         }
      } else {
         setValue(e.target.value);
      }
   };
   const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
      if (isPhone) {
         setValue(phoneFormatter(e.target.value));
      }
      if (!value || validation.errorText) {
         setDirty(true);
      }
   };

   return { onChange, onBlur, value, isDirty, ...validation };
};
