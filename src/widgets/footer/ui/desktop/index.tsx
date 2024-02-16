import { Footer } from './ui';
import { useFooterNav } from '../../constants';

export const FooterContainer = () => {
   const navList = useFooterNav();
   return <Footer lists={navList} />;
};
