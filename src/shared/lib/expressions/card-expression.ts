export const masterCardExpression = new RegExp(
   /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
);
export const visaExpression = new RegExp(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/);
export const mirCardExpression = new RegExp(/^220[0-4]\d{12}$/);
export const cardCodeExpression = new RegExp(/^[0-9]{3,4}$/);
export const cardValidityExpression = new RegExp(/^(0[1-9]|1[0-2])\/([0-9]{2})$/g);
