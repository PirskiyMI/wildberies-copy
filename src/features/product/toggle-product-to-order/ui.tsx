import { FC, memo, useCallback } from 'react';

import { Checkbox, useAppDispatch } from 'src/shared';
import { basketActions } from 'src/entities/basket/basket-item';

type Props = {
   isChecked: boolean;
   id: number;
};

export const ToggleProductToOrder: FC<Props> = memo(({ id, isChecked }) => {
   const { toggleProductIsChecked } = basketActions;
   const dispatch = useAppDispatch();

   const clickHandler = useCallback(() => {
      dispatch(toggleProductIsChecked(id));
   }, [dispatch, id, toggleProductIsChecked]);

   return <Checkbox Change={clickHandler} isChecked={isChecked} />;
});
