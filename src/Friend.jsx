import './App.css'
export default function Friend({friend}){
  const {name,email,phone} = friend;
  return(
    <div className="divStyle">
      <h1>Name: {name}</h1>
      <h4>Email: {email}</h4>
      <h4>Phone: {phone}</h4>
    </div>
  )
}