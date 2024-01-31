import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartTile } from 'src/shared';
import { UserInfoBasket } from 'src/entities/user';

export const CartUserInfo: FC = () => {
   const navigate = useNavigate();

   const clickHandler = () => navigate('/profile/user');
   return <CartTile title="Мои данные" content={<UserInfoBasket />} clickHandle={clickHandler} />;
};
