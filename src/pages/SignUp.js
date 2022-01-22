import React,{useState} from 'react'
import Axios from 'axios'
import './Validate.css'



function SignUp()
{
    
    
    const [inputs, setInputs] = useState({});
    const [err,setErr]=useState({})
    
    function handleChange(event){
      console.log(inputs)
           const name = event.target.name;
          const value= event.target.value;
          setInputs(values => ({...values, [name]: value}))         
    }

      function validate(input){
      
      let errors = {};
      let isValid = true;

      if (!input["firstName"]) {
        isValid = false;
        errors["firstName"] = "*Please enter your firstname.";
      }

      let regfname=/^[a-zA-Z ]*$/
      if(regfname.test(input["firstName"])===false)  
       {
         isValid = false;
         errors["firstName"] = "*Please enter alphabets only";
       }

       if(regfname.test(input["lastName"])===false)  
       {
         isValid = false;
         errors["lastName"] = "*Please enter alphabets only";
       }


        /* if (!input["firstName"].match(/^[a-zA-Z ]*$/)) {
          isValid = false;
          errors["firstname"] = "*Please enter alphabet characters only.";
        }
       */
      if (!input["lastName"]) {
        isValid = false;
        errors["lastName"] = "*Please enter your lastname.";
      }

     
        /* if (!input["lastName"].match(/^[a-zA-Z ]*$/)) {
          isValid= false;
          errors["username"] = "*Please enter alphabet characters only.";
        } */
      

      if (!input["emailorphonenumber"]) {
        isValid = false;
        errors["emailorphonenumber"] = "*Please enter your email-ID or Phone number";
      }

      
       //regular expression for email and mobileno validation
       let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$ || (^[6-9]\d{9}$)/;            
       if(regexpemail.test(input["emailorphonenumber"])===false)  
       {
         isValid = false;
         errors["emailorphonenumber"] = "*Please enter valid email-ID or Phone number";
       }
      

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "*Please enter your password.";
      }

      
      let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(regexppwd.test(input["password"])===false)
      { 
        isValid = false;
          errors["password"] = "*Please enter secure and strong password.";           
     }
      

      setErr(errors);
      return isValid;

      }


      function handleSubmit(event){
        event.preventDefault();   
        
        if (validate(inputs)) {
          var user={firstName:inputs.firstName,lastName:inputs.lastName,emailorphonenumber:inputs.emailorphonenumber,password:inputs.password}
        Axios.post('http://api.oopacks.com/api/test/register',JSON.stringify(user)).then(res=>{console.log(res.data)})
        }
 }
      
      

 return(
   <div className='container'>
       <form className="row g-3" onSubmit={handleSubmit} method='POST'>
  <div className="col-md-6">
    <label  className="form-label">First name</label>
    <input onChange={handleChange} value={inputs.firstName} type="text" name='firstName' className="form-control" />
    <div className='redborder'>{err.firstName}</div>
  </div>
  <div className="col-md-6">
    <label   className="form-label">Last name</label>
    <input name='lastName' type="text" value={inputs.lastName} onChange={handleChange} className="form-control" />
    <div className='redborder'>{err.lastName}</div>
  </div>

  
  <div className="col-md-6">
    <label  className="form-label">Email/phone Number</label>
    <input type="text" onChange={handleChange} value={inputs.emailorphonenumber} name='emailorphonenumber' className="form-control" id="inputAddress" placeholder=""/>
    <div className='redborder'>{err.emailorphonenumber}</div>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Password</label>
    <input type="password" onChange={handleChange} value={inputs.password} name='password' className="form-control" id="inputPassword4"/>
    <div className='redborder'>{err.password}</div>
  </div>
    
  <div className="col-12">
    <button type="submit"  className="btn btn-primary" >Sign Up</button>
  </div>
</form>
   </div>
)
}

export default SignUp


