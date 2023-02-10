import React, { createContext, useContext, useEffect, useState } from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Hub, Auth } from "aws-amplify";

interface UserContextType {
  user: CognitoUser | null;
  setUser: React.Dispatch<React.SetStateAction<CognitoUser | null>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}
export default function AuthContext({ children }: Props) {
  const [user, setUser] = useState<CognitoUser | null>(null);
  useEffect(() => {
    checkUser();
  }, []);
  //Anytime a user signs in or signs out
  useEffect(() => {
    Hub.listen("auth", () => {
      //Perform some action to update the page whenever auth event detected
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser) {
        setUser(amplifyUser);
      }
    } catch (error) {
      setUser(null);
      console.error(error);
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
