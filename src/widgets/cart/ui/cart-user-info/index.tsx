import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserInfoBasket } from 'src/entities/user';

import { CartItem } from '../cart-item';

export const CartUserInfo: FC = () => {
   const navigate = useNavigate();

   const clickHandler = () => navigate('/profile/user');
   return <CartItem title="Мои данные" content={<UserInfoBasket />} clickHandle={clickHandler} />;
};
