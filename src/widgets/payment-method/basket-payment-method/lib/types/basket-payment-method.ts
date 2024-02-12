export interface IBasketPaymentMethodPopUp {
   type: 'select' | 'form';
   cardList: { id: number; cardNumber: string; isMain: boolean }[];
   toggleType: () => void;
   closePopUp: () => void;
}
