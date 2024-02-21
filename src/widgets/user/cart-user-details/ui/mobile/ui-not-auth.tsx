import { FC, memo } from 'react';

import { MobileCartTile } from 'src/shared';

export const CartUserDetailsNotAuth: FC = memo(() => {
   return (
      <MobileCartTile
         title="Мои данные"
         content={<div>Войти или зарегистрироваться, чтобы оформить заказ</div>}
      />
   );
});
