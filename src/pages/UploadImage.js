import React,{useState} from 'react'
import axios from 'axios'


function UploadImage() {
  
    const [state,setState]=useState({selectedFile:''})
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value= event.target.value;
        setInputs(values => ({...values, [name]: value}))        
      }

    const onFileUpload=(e)=>
    {
        const formData = new FormData();

        formData.append(
            "myImg",
            state.selectedFile,
            state.selectedFile.name
          );
          console.log(state.selectedFile)
          const access_token=inputs.emailorphonenumber
          axios.put('http://api.oopacks.com/api/test/upload', formData,{headers:{'Authorization': `token ${access_token}`}}).then((res)=>{
              console.log(res)
          })

    }

   const onFileChange=(e)=>
   {
       setState({selectedFile:e.target.files[0]})
   }

   
 
    return(
             
        <div className='container'>
            <form className="row g-3" onSubmit={onFileUpload} method='PUT'>
            <h3>
              Upload Image
            </h3>

            <div className="col-md-6">
                 <label  className="form-label">email/phone number</label>
                <input type="text" onChange={handleChange} value={inputs.emailorphonenumber}  name='emailorphonenumber' className="form-control"  placeholder=""/>
            </div>

            <div className="col-md-6">                
                <input type="file" onChange={onFileChange} />                
            </div>

            <div className="col-md-6">
            <button type="submit" className="btn btn-primary" >Upload
                </button>
            </div>         
            </form>
            
        </div>
    
)}
export default UploadImage
