import React,{useState} from 'react';
import axios from 'axios';

function DeletePage() {
    
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;
        setInputs(values => ({...values, [name]: value}))        
      }

      const handleSubmit = (event) => {

        const access_token=inputs.emailorphonenumber

        axios.delete('http://api.oopacks.com/api/test/delete',{headers:{'Authorization': `token ${access_token}`}})  
      .then(res => {  
        console.log(res);   
      }) 
 
      }
    return (
        <div className='container'>
      <form className="row g-3" onSubmit={handleSubmit} method='DELETE'>
  
  
  <div className="col-md-6">
    <label  className="form-label">Email/phone Number</label>
    <input type="text" onChange={handleChange} name='emailorphonenumber' className="form-control" id="inputAddress" placeholder=""/>
  </div>
  
    
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Delete</button>
  </div>
</form>
</div>
    )
}

export default DeletePage;
