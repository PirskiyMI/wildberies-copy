import { FC, ReactNode } from 'react';

import { Section, Icon } from 'src/shared';

import styles from './styles.module.scss';

type Props = {
   title: string;
   content: ReactNode;
   clickHandle?: () => void;
   className?: string;
};

export const CartTile: FC<Props> = ({ title, content, clickHandle, className }) => {
   const classes = className ? `${className} ${styles.item}` : styles.item;
   const handler = clickHandle ? clickHandle : undefined;

   return (
      <Section className={classes}>
         <h2 className={styles.item__title} onClick={handler}>
            <span>{title}</span> <Icon icon="pen" className={styles.item__icon} />
         </h2>
         <div>{content}</div>
      </Section>
   );
};
