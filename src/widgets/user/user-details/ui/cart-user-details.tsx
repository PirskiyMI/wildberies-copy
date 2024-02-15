import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { DesktopCartTile, phoneFormatter, profilePath, useAppSelector } from 'src/shared';
import { UserInfoShort, userInfoSelector } from 'src/entities/user';

export const CartUserDetails: FC = memo(() => {
   const navigate = useNavigate();
   const clickHandler = useCallback(() => navigate(profilePath), [navigate]);
   const { name, isMale, phone } = useAppSelector(userInfoSelector);
   const formattedUserPhone = phoneFormatter(phone);

   return (
      <DesktopCartTile
         title="Мои данные"
         content={<UserInfoShort name={name} phone={formattedUserPhone} isMale={isMale} />}
         clickHandle={clickHandler}
      />
   );
});
