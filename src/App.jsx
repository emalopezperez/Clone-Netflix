import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from'../src/pages/Home'
import Login from '../src/pages/Login'
import SingUp from '../src/pages/SingUp'
import Account from '../src/pages/Account'
import RutasProtegidas from "./components/RutasProtegidas";
import { AuthContextProvider } from "./context/AuthContext.jsx";


function App() {
  return(
    <>
      <AuthContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singup' element={<SingUp/>}/>
          <Route path='/account' element={<RutasProtegidas><Account/></RutasProtegidas>}/>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App;
