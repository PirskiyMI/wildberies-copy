import { FC, ReactNode, memo } from 'react';

import styles from './styles.module.scss';

type SectionProps = {
   children: ReactNode;
   title?: string;
   className?: string;
};

export const Section: FC<SectionProps> = memo(({ children, title, className }) => {
   return (
      <section className={`${styles.section} ${className}`}>
         {title ? <h2 className={styles.section__title}>{title}</h2> : null} {children}
      </section>
   );
});
