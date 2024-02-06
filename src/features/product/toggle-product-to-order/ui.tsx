import { FC } from 'react';

import { Checkbox, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

type Props = {
   isChecked: boolean;
   id: number;
};

export const ToggleProductToOrder: FC<Props> = ({ id, isChecked }) => {
   const { toggleProductIsChecked } = basketActions;
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleProductIsChecked(id));
   };

   return <Checkbox Change={clickHandler} isChecked={isChecked} />;
};
