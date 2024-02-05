import { FC } from 'react';

import { Button, Error } from 'src/shared';

export const ErrorPage: FC = () => {
   return (
      <div>
         <Error />
         <Button>Кнопка</Button>
      </div>
   );
};
