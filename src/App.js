
import './App.css';
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import ForgotPage from './pages/ForgotPage'
import UploadImage from './pages/UploadImage'
import DeletePage from './pages/DeletePage';
import ChangePassword from './pages/ChangePassword';
import AddressPage from './pages/AddressPage';
import SentOtp from './pages/SentOtp';
import NavBar  from './NavBar';
import {Routes,Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div>


      
       <NavBar/>,
      <Routes>     
       <Route path='/' element={<SignUp/>} />  
       <Route path='/login' element={<LoginPage/>} /> 
       <Route path='/forgot' element={<ForgotPage/>} /> 
       <Route path='/image' element={<UploadImage/>} /> 
       <Route path='/delete' element={<DeletePage/>}/>
       <Route path='/address' element={<AddressPage/>}/> 
       <Route path='/changepassword' element={<ChangePassword/>}/>
       <Route path='/sentotp' element={<SentOtp/>}/>
       <Route path='*' element={<NotFoundPage/>} /> 
   </Routes> 
   
   </div>
    
  )
}

export default App

