export const priceFormatter = (num: number | string) =>
   num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
