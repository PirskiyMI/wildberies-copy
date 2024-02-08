import { createSelector } from '@reduxjs/toolkit';

export const basketListSelector = (state: RootState) => state.basketReducer.list;
export const basketTotalsSelector = createSelector([basketListSelector], (list) => {
   const { count, price } = list.reduce(
      (totals, item) => {
         const { price, status } = item;

         totals.price += price * status!.count;
         totals.count += status!.count;

         return totals;
      },
      { count: 0, price: 0 },
   );

   return { count, price };
});
export const orderTotalsSelector = createSelector([basketListSelector], (list) => {
   const selectedItems = list.filter((el) => el.status!.isChecked);

   const { count, price } = selectedItems.reduce(
      (totals, item) => {
         const { price, status } = item;

         totals.price += price * status!.count;
         totals.count += status!.count;

         return totals;
      },
      { count: 0, price: 0 },
   );

   return { count, price };
});
export const inBasketSelector = createSelector(
   [basketListSelector, (_basketListSelector, id: number) => id],
   (list, id) => {
      const inBasket = Boolean(list.find((el) => el.id === id));
      return inBasket;
   },
);
