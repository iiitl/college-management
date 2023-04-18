import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Calendar';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './Sidebar';
import PermanentDrawerLeft from './Drawer';
import MultiActionAreaCard from './View_Results';
import Last_part from './Last_part';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function Appbarty() {
  return (
  
<BrowserRouter>
<Routes>
<Route exact path="/" element={<><ResponsiveAppBar/><PermanentDrawerLeft/><App /></>}/>
{/* <Route  path="/" element={}> */}
{/* <Route  path="/" element={}/> */}


<Route path="/View_Results" element={<><ResponsiveAppBar/><PermanentDrawerLeft/><MultiActionAreaCard/></>} />
<Route path="/Grades" element={<><ResponsiveAppBar/><PermanentDrawerLeft/><Last_part/></>}/>


</Routes>
</BrowserRouter>

   

   
   
   


  )
}

export default Appbarty

