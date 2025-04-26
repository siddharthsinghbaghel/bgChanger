import React from 'react'

const UserContext = React.createContext()
// output me throw kr do 
export default UserContext;
//usecontext ek provider hai 
// jo humare app ke andar kisi bhi component ko data provide kar sakta hai
// usecontext ko hum kisi bhi component me use kar sakte hain, chahe wo kisi bhi level pe ho
//context ko ek global variable mano 

//ex:niche sare components usercontext ka access directly le sakte hain
// ye ek global variable hai jo humare app ke andar kisi bhi component ko data provide kar sakta hai

// <UserContext>
//     <Login/>
//     <Card/>
//     <Data/>
// </UserContext>