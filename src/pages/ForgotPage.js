import React,{useState} from 'react'
import axios from 'axios';

import {Link} from 'react-router-dom'


function ForgotPage() {
  
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;
        setInputs(values => ({...values, [name]: value}))        
      }

      const handleSubmit = (event) => {
        event.preventDefault();
         
      var user={emailorphoneNumber:inputs.emailorphonenumber,password:inputs.password}
      console.log(JSON.stringify(user))

      axios.put('http://api.oopacks.com/api/test/forgotpassword',JSON.stringify(user)).then(res=>{console.log(res.data)})

      /* fetch(
          '/api/',
          {
              method:'POST',
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(user) 
            }).then(()=>{
          console.log('user added')
      })
 */
      }
    return (
        <div className='container'>
      <form className="row g-3" onSubmit={handleSubmit} method='PUT'>
  
  
  <div className="col-md-6">
    <label  className="form-label">Email/phone Number</label>
    <input type="text" onChange={handleChange} name='emailorphonenumber' className="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" onChange={handleChange} name='password' className="form-control" id="inputPassword4"/>
  </div>
    
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Update</button>
  </div>
</form>
</div>
    )
}

export default ForgotPage
