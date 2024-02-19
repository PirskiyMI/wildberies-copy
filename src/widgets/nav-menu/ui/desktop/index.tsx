import { closeMenu, useAppDispatch, useAppSelector } from 'src/shared';
import { NavMenu } from './ui';

export const NavMenuContainer = () => {
   const { isOpen } = useAppSelector((state) => state.burgerReducer);
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(closeMenu());
   };

   return <NavMenu isOpen={isOpen} clickHandler={clickHandler} />;
};
