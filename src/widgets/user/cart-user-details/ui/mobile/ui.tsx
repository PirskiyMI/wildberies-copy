import { FC, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { MobileCartTile, phoneFormatter, profilePath } from 'src/shared';
import { UserInfoShort } from 'src/entities/user';

export interface ICartUserDetailsProps {
   name: string;
   phone: string;
   isMale: boolean;
}

export const CartUserDetails: FC<ICartUserDetailsProps> = memo(({ name, isMale, phone }) => {
   const navigate = useNavigate();
   const clickHandler = useCallback(() => navigate(profilePath), [navigate]);
   const formattedUserPhone = phoneFormatter(phone);

   return (
      <MobileCartTile
         title="Мои данные"
         content={<UserInfoShort name={name} phone={formattedUserPhone} isMale={isMale} />}
         clickHandle={clickHandler}
      />
   );
});
