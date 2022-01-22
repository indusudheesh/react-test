import React,{useState} from 'react';
import axios from 'axios';

function AddressPage() {
    const [state,setState]=useState([])
    const [inputs, setInputs] = useState({});

function handleClick(e){

    axios.get('https://api.oopacks.com/api/test/profile').then((res)=>{
        setState(res.data)
    })
}

function handleChange(event){
    const name = event.target.name;
    const value= event.target.value;
    setInputs(values => ({...values, [name]: value})) 
}

function handleSubmit(e){
    e.preventDefualt();
    const access_token=inputs.emailorphonenumber
    axios.get('https://api.oopacks.com/api/test/updateaddress', inputs.address,{
  headers: {
    'Authorization': `token ${access_token}`
  }
})
.then((res) => {
  console.log(res.data)
})
}


  return (
  <div className='container'>

<div className="col-md-6">
   <button className="btn btn-success" onClick={handleClick}>
       Get Profile
   </button>
  </div>
  {
      state.map((obj)=>{
          return(
<div>
    <h1>{obj.emailorphonenumber}</h1>
    <h1>{obj.address}</h1>
</div>)
      })
  }

<form method='POST' onSubmit={handleSubmit}>

<div className="col-md-6 pt-3">
    <label   className="form-label">Address</label>
    <input name='address' type="text" value={inputs.address} onChange={handleChange} className="form-control" />    
  </div>
  <div className="col-6 pt-2">
    <button type="submit"  className="btn btn-primary" >Sign Up</button>
  </div>
  </form>
 </div>
  )
}

export default AddressPage;
