import { FC } from 'react';

import { Checkbox } from 'src/shared';
import { IToggleProductToOrder } from './types';

export const ToggleProductToOrder: FC<IToggleProductToOrder> = ({ isChecked, clickHandler }) => {
   return <Checkbox Change={clickHandler} isChecked={isChecked} />;
};
