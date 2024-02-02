import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartTile, profilePath } from 'src/shared';
import { UserInfoBasket } from 'src/entities/user';

export const CartUserInfo: FC = memo(() => {
   const navigate = useNavigate();

   const clickHandler = () => navigate(profilePath);
   return <CartTile title="Мои данные" content={<UserInfoBasket />} clickHandle={clickHandler} />;
});
