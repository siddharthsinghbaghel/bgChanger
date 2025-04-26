import React from "react";
import UserContext from "./UserContext";
// neche children jo humne diya hai usko as a outlet samjho,
// yani children  ko chod ke sab me changes honge (div ko chod ke sab me changes honge)
// yaha children = outlet = div ko mano 
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider