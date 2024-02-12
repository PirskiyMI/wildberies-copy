import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartTile, phoneFormatter, profilePath, useAppSelector } from 'src/shared';
import { UserInfoShort, userMainInfoSelector } from 'src/entities/user';

export const CartUserDetails: FC = memo(() => {
   const navigate = useNavigate();
   const { name, isMale, tel } = useAppSelector(userMainInfoSelector);
   const formattedUserPhone = phoneFormatter(tel);
   const clickHandler = () => navigate(profilePath);

   return (
      <CartTile
         title="Мои данные"
         content={<UserInfoShort name={name} phone={formattedUserPhone} isMale={isMale} />}
         clickHandle={clickHandler}
      />
   );
});
