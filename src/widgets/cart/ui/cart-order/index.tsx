import { FC } from 'react';

import { Button } from 'src/shared';
import { Order } from 'src/entities/order';

export const CartOrder: FC = () => {
   return <Order Button={<Button>Заказать</Button>} />;
};
