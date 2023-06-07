import React, { createContext, useState } from "react";
import { User } from "firebase/auth";

interface UserContextType {
  currentUser: User; 
  setCurrentUser: (user: User) => void; 
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const value: UserContextType = { currentUser, setCurrentUser };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
