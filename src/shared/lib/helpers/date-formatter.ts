export const dateFormatter = (str: string) => {
   str = str.replace(/[^0-9]/g, '');
   return str.replace(/([0-9]{2})([0-9]{2})/, `$1/$2`);
};
