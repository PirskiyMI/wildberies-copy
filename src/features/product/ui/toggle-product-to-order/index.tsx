import { FC } from 'react';

import { Checkbox, useAppDispatch } from 'src/shared';
import { toggleProductIsChecked } from 'src/entities/basket';

type Props = {
   isChecked: boolean;
   id: number;
};

export const ToggleProductToOrder: FC<Props> = ({ id, isChecked }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(toggleProductIsChecked(id));
   };

   return <Checkbox Change={clickHandler} isChecked={isChecked} />;
};
