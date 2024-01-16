import { FC } from 'react';
import { Order } from '../../../../entities/order';
import { Button } from '../../../../shared/ui';

export const CartOrder: FC = () => {
   return <Order Button={<Button>Заказать</Button>} />;
};
