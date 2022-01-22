import React,{useState} from 'react'
import Axios from 'axios'
import './Validate.css'

function LoginPage() {

    const [inputs, setInputs] = useState({});
    const [err,setErr]=useState({})
    
    const handleChange = (event) => {     

      const name = event.target.name;
      const value= event.target.value;
      setInputs(values => ({...values, [name]: value})) 
      }

      function validate(input){
     
      let errors = {};
      let formIsValid = true;

     
      if (!input["emailorphonenumber"]) {
        formIsValid = false;
        errors["emailorphonenumber"] = "*Please enter your email-ID or Phone number";
      }

      
        //regular expression for email and mobileno validation
        let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$ | ((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;             
        if(regexpemail.test(input["emailorphonenumber"])===false)  
        {
          formIsValid = false;
          errors["emailorphonenumber"] = "*Please enter valid email-ID or Phone number";
        }
      

      if (!input["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(regexppwd.test(input["password"])===false)
      { 
        formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";           
     }

      

      setErr(errors);
      return formIsValid;


      }

      const handleSubmit = (event) => {
         event.preventDefault();
        if (validate(inputs)) {
          var user={emailorphonenumber:inputs.emailorphonenumber,password:inputs.password}
          console.log(JSON.stringify(user))    
         Axios.post('http://api.oopacks.com/api/test/login',JSON.stringify(user)).then(res=>{console.log(res.data)})
      }
         
      

      }
    return (
        <div className='container' >
      <form className="row g-3 stl" onSubmit={handleSubmit} method='POST'>
  
  
  <div className="col-md-6">
    <label  className="form-label">Email/phone Number</label>
    <input type="text"onChange={handleChange} value={inputs.emailorphonenumber} name='emailorphonenumber' className="form-control" id="inputAddress" placeholder=""/>
    <div className='redborder'>{err.emailorphonenumber}</div>
  </div>

  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" onChange={handleChange} value={inputs.password} name='password' className="form-control" id="inputPassword4"/>
    <div className='redborder'>{err.password}</div>
  </div>
    
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >log In</button>
  </div>
</form>
<div>
    <a href="/forgot">forgot password</a>
</div>
</div>
    )
}

export default LoginPage
