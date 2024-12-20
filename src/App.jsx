import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MySignIn from "./pages/SignIn/MySignIn";
import MySignUp from "./pages/SignUp/MySignUp";
import { getUser, removeToken } from "../utils/auth";
import Landing from "./components/Landing/Landing";
import MyNavBar from "./components/NavBar/MyNavBar/MyNavBar"; // Import the authenticated navbar
import LandingNavBar from "./components/NavBar/LandingNavBar/LandingNavBar"; // Import the landing navbar
import MyList from "./components/MyList/MyList";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("");
    
    removeToken();
    setUser(null);
    navigate("/");
    
  };
 console.log(user)
  return (
    <>
      <LandingNavBar user={user} handleSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<MySignIn setUser={setUser} />} />
        <Route path="/MySignUp" element={<MySignUp setUser={setUser} />} />
        <Route path="/Landing" element={<Landing user={user} />} />
        <Route path="/MyList/:id" element={<MyList />} />
      </Routes>
    </>
  );
};

export default App;
