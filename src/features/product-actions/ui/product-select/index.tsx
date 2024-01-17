import { FC } from 'react';

import { Checkbox, useAppDispatch } from 'src/shared';

import { toggleProductIsChecked } from '../..';

type Props = {
   isChecked: boolean;
   id: number;
};

export const ProductSelect: FC<Props> = ({ id, isChecked }) => {
   const dispatch = useAppDispatch();


   const clickHandler = () => {
      dispatch(toggleProductIsChecked(id));
   };

   return  <Checkbox Change={clickHandler} isChecked={isChecked}/>;
};
