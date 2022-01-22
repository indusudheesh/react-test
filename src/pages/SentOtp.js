
import React,{useState} from 'react';
import axios from 'axios'

function SentOtp() {
    const url='';
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;
        setInputs(values => ({...values, [name]: value}))        
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        var obj={phonenumber:inputs.phonenumber}
        
       axios.post('http://api.oopacks.com/api/auth/sendotp',obj)  
      .then(res => {  
        console.log(res);  
        console.log(res.data); 
      })  
    
    }

    
 

    return (
        <div className='container'>
      <form className="row g-3" onSubmit={handleSubmit} method='POST'>
  
  
  <div className="col-md-6">
    <label  className="form-label">Phone Number</label>
    <input type="Number" onChange={handleChange} name='phonenumber' className="form-control"  placeholder=""/>
</div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Send OTP</button>
  </div>
</form>
</div>
    )
}

export default SentOtp;
