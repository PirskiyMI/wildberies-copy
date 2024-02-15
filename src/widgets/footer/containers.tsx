import { Footer } from './ui';
import { useFooterNav } from './constants';
import { useAppSelector, windowWidthSelector } from 'src/shared';

export const FooterContainer = () => {
   const navList = useFooterNav();
   const windowWidth = useAppSelector(windowWidthSelector);

   if (!windowWidth) {
      return null;
   }

   return <Footer isDesktop={windowWidth >= 1024} lists={navList} />;
};
