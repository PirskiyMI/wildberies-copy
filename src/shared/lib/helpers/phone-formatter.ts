export const phoneFormatter = (str: string) => {
   str = str.replace(/[^0-9]/g, '');
   return str.replace(/([0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/, `+$1 ($2) $3-$4-$5`);
};
