import { FC, ReactNode } from 'react';

import { useAppSelector } from 'src/shared';

import styles from './styles.module.scss';

type AvatarProps = {
   name: string;
};
type Props = {
   changeButton: ReactNode;
};

const UserDetailsAvatar: FC<AvatarProps> = ({ name }) => {
   const { img: src } = useAppSelector((state) => state.userReducer);

   if (src) {
      return (
         <div className={styles.user__avatar}>
            <img src={src} alt={name} className={styles.user__img} />
         </div>
      );
   }

   const firstLatter = name[0];

   return <div className={styles.user__avatar}>{firstLatter}</div>;
};

export const UserDetailsInfo: FC<Props> = ({ changeButton }) => {
   const { name } = useAppSelector((state) => state.userReducer);

   return (
      <article className={styles.user}>
         <UserDetailsAvatar name={name} />
         <div className={styles.user__name}>
            <span className={styles.user__text}>{name}</span> {changeButton}
         </div>
      </article>
   );
};
