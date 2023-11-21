import { FC, ReactNode, useState } from 'react';
import styles from './Spoiler.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '..';

type SpoilerProps = {
   initial?: boolean;
   Title: ReactNode;
   Content: ReactNode;
};

export const Spoiler: FC<SpoilerProps> = ({ initial, Content, Title }) => {
   const [isOpen, setIsOpen] = useState(initial ? true : false);

   return (
      <div className={styles.spoiler}>
         <div className={styles.spoiler__label} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${styles.spoiler__title} ${isOpen && styles.spoiler__title_hidden}`}>
               {Title}
            </div>
            <div className={`${styles.spoiler__arrow} ${isOpen && styles.spoiler__arrow_active}`}>
               <Icon icon="arrow" />
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className={styles.spoiler__body}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}>
                  {Content}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};
