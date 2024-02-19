import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from 'src/shared';
import { userActions } from 'src/entities/user';

import { UserGenderSwitcher } from './ui';

export const UserGenderSwitcherContainer: FC = memo(() => {
   const { isMale } = useAppSelector((state) => state.userReducer);
   const { setGender } = userActions;
   const dispatch = useAppDispatch();

   const setMale = () => {
      dispatch(setGender(true));
   };
   const setFemale = () => {
      dispatch(setGender(false));
   };

   return <UserGenderSwitcher isMale={isMale} setMale={setMale} setFemale={setFemale} />;
});
