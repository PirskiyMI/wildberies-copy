import { FC, ReactNode } from 'react';

import { Section, Icon } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   title: string;
   content: ReactNode;
   clickHandle?: () => void;
   className?: string;
};

export const CartItem: FC<Props> = ({ title, content, clickHandle, className }) => {

   const classes = className ? `${className} ${styles.item}` : styles.item;

   return (
      <Section className={classes}>
         {clickHandle ? (
            <h2 className={styles.item__title} onClick={clickHandle}>
               <span>{title}</span> <Icon icon="pen" className={styles.item__icon} />
            </h2>
         ) : (
            <h2 className={styles.item__title}>
               <span>{title}</span> <Icon icon="pen" className={styles.item__icon} />
            </h2>
         )}
         <div>{content}</div>
      </Section>
   );
};
