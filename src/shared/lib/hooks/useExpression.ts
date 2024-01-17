export const useExpression = () => {
   const nameRegExp = new RegExp(/[^a-яА-ЯёЁ]/g);
   const emailRegExp = new RegExp(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/);
   const telRegExp = new RegExp(/(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/);
   const dateRegExp = new RegExp(/^(0[1-9]|1[0-2])\/([0-9]{2})$/g);
   const cardRegExps = {
      masterCardRegExp: new RegExp(
         /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
      ),
      visaCardRegExp: new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/),
      mirCardRegExp: new RegExp(/^220[0-4]\d{12}$/),
      code: new RegExp(/^[0-9]{3,4}$/),
   };

   return {
      nameRegExp,
      emailRegExp,
      telRegExp,
      dateRegExp,
      cardRegExps,
   };
};
