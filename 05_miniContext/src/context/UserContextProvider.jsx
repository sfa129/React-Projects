import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    //everything do here
    //if I want something, we use user and if we store something so we can do it with setUser
    const [user, setUser] = React.useState(null)
    return (
        //then, throw in here and store
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider