import { useCallback, useState } from 'react';

export const usePopUp = () => {
   const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

   const openPopUp = useCallback(() => setIsPopUpOpen(true), []);
   const closePopUp = useCallback(() => setIsPopUpOpen(false), []);

   return { isPopUpOpen, openPopUp, closePopUp };
};
