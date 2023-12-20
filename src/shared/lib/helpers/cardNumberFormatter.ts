export const cardNumberFormatter = (str: string) => {
   str = str.replace(/[^0-9]/g, '');
   return str.replace(/\d{4}(?=.)/g, '$& ');
};
