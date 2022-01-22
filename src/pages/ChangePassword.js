import React,{useRef,useState,useEffect} from 'react';
import axios from 'axios';
import './Validate.css'



function ChangePassword() {  
  const [inputs, setInputs] = useState({});
  const [err,setErr]=useState({})
  
  function handleChange(event){
    console.log(inputs)
         const name = event.target.name;
        const value= event.target.value;
        setInputs(values => ({...values, [name]: value}))         
  }
            
   
     function handleSubmit(e){
       e.preventDefault()
       console.log('submiting')
       if(validate(inputs))
       {
         let obj={oldPassword:inputs.oldPassword,newPassword:inputs.newPassword}
         const access_token=inputs.emailorphonenumber
         axios.put('http://api.oopacks.com/api/test/changepassword',JSON.stringify(obj),{headers:{'Authorization': `token ${access_token}`}}).then((res)=>{
          console.log(res);  
         })
       }
else
console.log(err.newPassword)
       }
     
function validate(input)
{
  let errors={}
  let isValid=true

if(!input.oldPassword){

isValid=false
errors["oldPassword"]="input old password"
}

let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(regexppwd.test(input["oldPassword"])===false)
{ 
  isValid = false;
    errors["oldPassword"] = "*Password Error";           
}


if(regexppwd.test(input["newPassword"])===false)
{ 
  isValid = false;
    errors["newPassword"] = "*Please enter secure and strong password.";           
}



if(!input.newPassword){
 
  isValid=false
  errors["newPassword"]="input new password"
  }

  if (!input["emailorphonenumber"]) {
    isValid = false;
    errors["emailorphonenumber"] = "*Please enter your email-ID or Phone number";
  }

  
    //regular expression for email and mobileno validation
    let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$ || ((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;             
    if(regexpemail.test(input["emailorphonenumber"])===false)  
    {
      isValid = false;
      errors["emailorphonenumber"] = "*Please enter valid email-ID or Phone number";
    }

setErr(errors)
console.log(err)
return isValid

}

    return (
        <div className='container'>
          
      <form className="row g-3" onSubmit={handleSubmit} method='PUT' >  
  
      <div className="col-md-6">
    <label  className="form-label">email/phone number</label>
    <input type="text" onChange={handleChange} value={inputs.emailorphonenumber}  name='emailorphonenumber' className="form-control"  placeholder=""/>
    <div className='redborder'>{err.emailorphonenumber}</div>
  </div>

  <div className="col-md-6">
    <label  className="form-label">Old password</label>
    <input type="password" onChange={handleChange} value={inputs.oldPassword}  name='oldPassword' className="form-control"  placeholder=""/>
    <div className='redborder'>{err.oldPassword}</div>
  </div>
<div className="col-md-6">
<label  className="form-label">New password</label>
    <input type="password" onChange={handleChange} value={inputs.newPassword}  name='newPassword' className="form-control"  placeholder=""/>
    <div className='redborder'>{err.newPassword} </div>
  </div>
  
    
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Update</button>
  </div>
</form>
</div>
    )
}

export default ChangePassword;
