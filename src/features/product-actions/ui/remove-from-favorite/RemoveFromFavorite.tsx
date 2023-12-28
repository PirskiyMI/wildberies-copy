import { FC } from 'react';
import { useAppDispatch } from '../../../../shared/lib';
import { removeFromFavorites } from '../../../../entities/user';
import { Icon } from '../../../../shared/ui';
import styles from './RemoveFromFavorite.module.scss';
import { toggleToFavorite } from '../../../../widgets/home/model/productListSlice';

type Props = {
   id: number;
};

export const RemoveFromFavorite: FC<Props> = ({ id }) => {
   const dispatch = useAppDispatch();

   const clickHandler = () => {
      dispatch(removeFromFavorites(id));
      dispatch(toggleToFavorite(id));
   };

   return (
      <button className={styles.button} onClick={clickHandler}>
         <Icon className={styles.button__icon} icon="cross" />
      </button>
   );
};
