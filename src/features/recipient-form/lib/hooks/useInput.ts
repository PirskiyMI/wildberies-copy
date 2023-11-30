import { ChangeEvent, useState } from 'react';
import useValidation, { validatorsValue } from './useValidation';
import { phoneFormatter } from '../../../../shared/lib';

const phoneRegExp = new RegExp(/[а-яА-ЯёЁa-zA-Z]/gi);

const useInput = (
   initialValue: string,
   validators: validatorsValue,
   isPhone?: boolean,
   isNumber?: boolean,
) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setDirty] = useState(false);
   const validation = useValidation(value, validators);

   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDirty(false);
      if (isPhone) {
         if (!e.target.value.match(phoneRegExp)) {
            setValue(e.target.value);
         } else if (e.target.value.length === 0) {
            setValue('');
         }
      } else if (isNumber) {
         if (Number(e.target.value)) {
            setValue(e.target.value);
         } else if (e.target.value.length === 0) {
            setValue('');
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

export default useInput;
