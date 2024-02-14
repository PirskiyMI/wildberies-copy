import { cardNumberFormatter, dateFormatter, useInput } from 'src/shared';

export const useCardForm = () => {
   const {
      errorText: cardErrorText,
      isDirty: cardIsDirty,
      value: cardValue,
      ...card
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

   const isDirty = cardIsDirty || dateIsDirty || codeIsDirty;
   const isEmpty = cardValue || dateValue || codeValue;

   const cardNumber = cardNumberFormatter(cardValue);
   const cardDate = dateFormatter(dateValue);

   const fields = [
      { id: 'card:', title: 'Номер карты', value: cardNumber, errorText: cardErrorText, ...card },
      { id: 'date:', title: 'ММ/ГГ', value: cardDate, errorText: dateErrorText, ...date },
      { id: 'code:', title: 'CVV/CVC', value: codeValue, errorText: codeErrorText, ...code },
   ];

   const validate = {
      isDirty,
      isEmpty,
   };

   const fieldsValue = {
      cardValue,
      dateValue,
      codeValue,
   };

   return { fields, validate, fieldsValue };
};
