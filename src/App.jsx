import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MySignIn from './pages/SignIn/MySignIn';
import MySignUp from './pages/SignUp/MySignUp';
import { getUser, removeToken } from '../utils/auth';
import MyNavBar from './components/MyNavBar';
import Dashboard from './components/Dashboard';

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
      <MyNavBar handleSignOut={handleSignOut} user={ user }/>
      <Routes>
        {/* {user ? <Route path="/" element={<Dashboard user={user} />} /> : <Route path="/" element={<Landing />} />} */}
        <Route path="/MySignIn" element={<MySignIn setUser={setUser}/>} />
        <Route path="/MySignUp" element={<MySignUp  setUser={setUser} />} />
        </Routes>
    </>
  );
};

export default App;
