import React from "react";
import UserContext from "./UserContext";    

const UserContextProvider = ({ children }) => {}
    return (
        <UserContext.Provider value={{ name: "John", age: 25 }}>
            {children}
        </UserContext.Provider>
    );


    
export default UserContextProvider;