import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Item from './views/Item';
import Login from './views/Login';
import Register from './views/Register';
import PasswordReset from './views/PasswordReset';
import { RecoilRoot } from 'recoil';
import { useState, useEffect } from 'react';
import Library from './views/Library';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import UserProfile from './views/UserProfile';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(null);
  const [token] = useState(JSON.parse(localStorage.getItem('token')));

  useEffect(() => {
    const verify_token = async () => {
      let url = 'http://localhost:4000/user/verify_token';
      console.log(token);
      try {
        if (!token) {
          setIsLogedIn(false);
        } else {
          axios.defaults.headers.common['Authorization'] = token;
          const response = await axios.post(url);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  const login = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setIsLogedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogedIn(false);
  };

  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={isLogedIn ? <Navigate to="/user/home" /> : <Home />}
            />
            <Route path="/manga/:id" element={<Item />} />
            <Route path="/manga/library" element={<Library />} />
            <Route path="/user/login" element={<Login login={login} />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/passReset" element={<PasswordReset />} />
            <Route path="/user/home" element={<UserProfile />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
