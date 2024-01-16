import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type Props = {
   path: string;
   content: ReactNode;
   className?: string;
};

export const ProfileItem: FC<Props> = ({ path, content, className }) => {
   const classes = className ? `${styles.item} ${className}` : `${styles.item}`;

   return (
      <Link to={path} className={classes}>
         {content}
      </Link>
   );
};
// export const ProfileItemTop: FC<PropsTop> = ({ title, image }) => {
//    return <></>;
// };
// export const ProfileItemBottom: FC<PropsBottom> = ({ label, text, className }) => {
//    const classes = className ? `${styles.item__bottom} ${className}` : `${styles.item__bottom}`;

//    return (
//       <div className={classes}>
//          <span className={styles.item__label}>{label}</span>
//          {text && <span>{text}</span>}
//       </div>
//    );
// };
