import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { DesktopCartTile } from 'src/shared';

export const BasketPaymentMethodNotAuth: FC = memo(() => {
   return (
      <div>
         <DesktopCartTile
            title="Способ оплаты"
            content={
               <div>
                  {' '}
                  <Link to="/auth" style={{ color: 'pink' }}>
                     Войти или зарегистрироваться
                  </Link>{' '}
                  , чтобы выбрать способ оплаты
               </div>
            }
         />
      </div>
   );
});
