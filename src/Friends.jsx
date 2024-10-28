import { useEffect, useState } from 'react'
import './App.css'
import Friend from './Friend';
// import Friends from './Friends';
export default function Friends(){
  const [friends,setFriends]= useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => setFriends(data))
  },[])
  return(
    <div className='divStyle'>
    <h3>Friends {friends.length}</h3>
    {
      friends.map(friend => <Friend friend={friend}></Friend>)
    }
    {/* <Friend></Friend>   */}
    </div>
  )
}