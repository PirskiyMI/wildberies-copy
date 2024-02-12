import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartTile, profilePath, useAppSelector } from 'src/shared';
import { UserInfoShort, userMainInfoSelector } from 'src/entities/user';

export const CartUserDetails: FC = memo(() => {
   const navigate = useNavigate();
   const { name, isMale } = useAppSelector(userMainInfoSelector);
   const clickHandler = () => navigate(profilePath);
   
   return (
      <CartTile
         title="Мои данные"
         content={<UserInfoShort name={name} isMale={isMale} />}
         clickHandle={clickHandler}
      />
   );
});
