

import './App.css';
import React, {useState} from 'react';
 
import { computeHeadingLevel } from '@testing-library/react';
const App = () => {
  const [register,setregister]=useState({
    username :"",
    email :"",
    Phone:"",
    Password:""
  });
   
  const  [records,setrecords]=useState([]);
  
  const funcHandle = (e) =>{
    const name =e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setregister({...register, [name]: value})
  }

 const funcSubmit = (e) =>{
      e.preventDefault();
      const newRecord = {...register,id : new Date().getTime().toString()}
      console.log(records);
      setrecords([...records,newRecord]);
      console.log(records);

       setregister({username:"",email:"",Password:"",Phone:""});
 }
  return (
   
  <div className='App-header'>
      <h1>Registration Form</h1>
    <form action='' onSubmit={funcSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text"
        value={register.username}
        onChange={funcHandle}
        name="username" id="username"></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"
         value={register.email}
         onChange={funcHandle}
        name="email" id="email"></input>
      </div>
      <div>
        <label htmlFor="Phone">Phone</label>

        <input  type="tel" 
         value={register.Phone}
         onChange={funcHandle}
        name="Phone" id="Phone"></input>
      </div>
      <div >
        <label htmlFor='Password'>Password</label>
        <input type="password" 
         value={register.Password}
         onChange={funcHandle}
        name="Password" id="Password"></input>
      </div>
      <button type="submit">Register</button>
    </form>

    <div>
      {records.map((currentElement)=>{
          return(
            
            <div>
              <p> Name: {currentElement.username}  </p>
              <p>email: {currentElement.email }</p>
              <p> phoneno: {currentElement.Phone}</p>
              <p> password: {currentElement.Password}</p>
            
            </div>
          )
      }) 
      }
    </div>
  </div>
  )
}

export default App;
