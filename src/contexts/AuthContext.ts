import { User, UserCredential } from 'firebase/auth';
import { createContext } from 'react';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  profileUpdate: (name: string, photo: string) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  googleLogin: () => Promise<any>;
  logOut: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;