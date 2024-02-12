import { Footer } from './ui';
import { useFooterNav } from './constants';
import { useAppSelector, windowWidthSelector } from 'src/shared';

export const FooterContainer = () => {
   const navList = useFooterNav();
   const windowWidth = useAppSelector(windowWidthSelector);

   return <Footer isDesktop={windowWidth >= 1024} lists={navList} />;
};
