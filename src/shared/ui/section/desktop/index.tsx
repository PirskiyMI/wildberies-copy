import { FC,  memo } from 'react';

import styles from './styles.module.scss';
import { ISectionProps } from 'src/shared/lib/types/types-ui/section-types';


export const Section: FC<ISectionProps> = memo(({ children, title, className }) => {
   return (
      <section className={`${styles.section} ${className}`}>
         {title ? <h2 className={styles.section__title}>{title}</h2> : null} {children}
      </section>
   );
});
