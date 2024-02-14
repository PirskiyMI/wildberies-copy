import { FC, memo, FormEvent, useCallback } from 'react';

import { useAppDispatch, useAppSelector, useInput } from 'src/shared';
import { userActions } from 'src/entities/user';

import { IChangeUserNameContainer } from './types';
import { ChangeUserName } from '../ui';

export const ChangeUserNameContainer: FC<IChangeUserNameContainer> = memo(({ closePopUp }) => {
   const { name } = useAppSelector((state) => state.userReducer);
   const { setName } = userActions;
   const inputProps = useInput(name, {
      isRequired: true,
      type: 'name',
   });
   const { isDirty, value } = inputProps;
   const dispatch = useAppDispatch();

   const submitHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         if (!isDirty) {
            dispatch(setName(value));
            if (closePopUp) closePopUp();
         }
      },
      [closePopUp, dispatch, isDirty, value, setName],
   );

   return <ChangeUserName input={inputProps} submitHandler={submitHandler} />;
});
