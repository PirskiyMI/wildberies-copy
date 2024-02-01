import { useState } from 'react';

export const usePopUp = () => {
   const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

   const openPopUp = () => setIsPopUpOpen(true);
   const closePopUp = () => setIsPopUpOpen(false);

   return { isPopUpOpen, openPopUp, closePopUp };
};
