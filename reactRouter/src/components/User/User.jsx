import React from 'react'
import { useParams } from 'react-router-dom'
// main.jsx me route banate waqt humne user/:userid likha tha, ye :userid dynamic hai, isliye useParams se hum usko access karte hain
// useParams se hum url se params ko access karte hain, ye ek hook hai jo react-router-dom se aata hai
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User