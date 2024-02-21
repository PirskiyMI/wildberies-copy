import { FC, memo } from 'react';

import { DesktopCartTile } from 'src/shared';

export const CartUserDetailsNotAuth: FC = memo(() => {
   /* const navigation = useNavigate(); */

   /* console.log(1); */

   return (
      <DesktopCartTile
         title="Мои данные"
         content={<div>Войти или зарегистрироваться, чтобы оформить заказ</div>}
      />
   );
});
