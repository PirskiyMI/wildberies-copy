import { userActions } from 'src/entities/user';
import { useAppDispatch } from 'src/shared';

export const UserLogOut = () => {
   const { deleteUser } = userActions;
   const dispatch = useAppDispatch();

   const logOut = () => {
      dispatch(deleteUser());
   };

   return <span onClick={logOut}>Выйти</span>;
};
