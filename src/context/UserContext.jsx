import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContex = createContext();

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false)
        return (
            <UserContex.Provider value={{user, setUser}}>
                {children}
            </UserContex.Provider>
        )
}

export default UserProvider


export const useUserContext = () => useContext(UserContex)