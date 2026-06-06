 import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Home from './home/Home'
import Courses from '../src/Courses/Courses'
import Signup from "./components/Signup"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
function App() {
 const [authUser,setAuthUser]=useAuth();
  console.log("Component rendered",authUser);
 

  return (
    <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={authUser?<Courses/>: <Navigate to="/signup"></Navigate>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    

</Routes>
<Toaster position="top-center" />

</BrowserRouter>


    
    </>
  )
}

export default App
