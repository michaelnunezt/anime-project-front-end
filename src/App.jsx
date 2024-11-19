import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MySignIn from './pages/SignIn/MySignIn';
import MySignUp from './pages/SignUp/MySignUp';
import { getUser, removeToken } from '../utils/auth';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import './App.css'


const App = () => {
  const [user, setUser ] = useState(getUser());

  const navigate = useNavigate(); 

    const handleSignOut = () => {
    removeToken()
    setUser(null)
    navigate('/')
  } 

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard user={user} />} />
        <Route path="/MySignIn" element={<MySignIn setUser={setUser}/>} />
        <Route path="/MySignUp" element={<MySignUp  setUser={setUser} />} />
        <Route path="/Landing" element={<Landing user={user} />} />
        </Routes>
    </>
  );
};

export default App;
