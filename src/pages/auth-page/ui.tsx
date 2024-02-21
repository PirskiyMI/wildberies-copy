import { FormCreateUser } from 'src/features/user/form-create-user';

export const AuthPage = () => {
   return (
      <div
         className="container"
         style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}>
         <FormCreateUser />
      </div>
   );
};
