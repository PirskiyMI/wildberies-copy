import { FC, memo } from 'react';

import { useAppDispatch, useAppSelector } from 'src/shared';
import { userActions } from 'src/entities/user';

import { UserGenderSwitcher } from '../ui';

export const UserGenderSwitcherContainer: FC = memo(() => {
   const { isMale } = useAppSelector((state) => state.userReducer);
   const { windowWidth } = useAppSelector((state) => state.windowWidthReducer);
   const { setGender } = userActions;
   const dispatch = useAppDispatch();

   const maleGender = windowWidth! >= 768 ? 'Муж.' : 'Мужской';
   const femaleGender = windowWidth! >= 768 ? 'Жен.' : 'Женский';

   const setMale = () => {
      dispatch(setGender(true));
   };
   const setFemale = () => {
      dispatch(setGender(false));
   };

   return (
      <UserGenderSwitcher
         isMale={isMale}
         maleLabel={maleGender}
         femaleLabel={femaleGender}
         setMale={setMale}
         setFemale={setFemale}
      />
   );
});
