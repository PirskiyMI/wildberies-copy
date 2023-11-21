import { FC, ReactNode } from 'react';
import styles from './Section.module.scss';

type SectionProps = {
   children: ReactNode;
   className?: string;
};

export const Section: FC<SectionProps> = ({ children, className }) => {
   return <section className={`${styles.section} ${className}`}>{children}</section>;
};
