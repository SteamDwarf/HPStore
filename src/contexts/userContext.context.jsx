import { createContext, useState } from "react";

const defaultUserValue = {
    user: null,
    setUser: () => null
}

export const UserContext = createContext(defaultUserValue);
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const value = {user, setUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};