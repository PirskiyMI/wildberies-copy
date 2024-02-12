import { IPayment } from 'src/entities/user';

export interface IBasketPaymentMethod {
   paymentInfo: IPayment[];
   mainCard: string | undefined;
}
