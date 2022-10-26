import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Item from './views/Item';
import Login from './views/Login';
import Register from './views/Register';
import PasswordReset from './views/PasswordReset';
import { useState, useEffect } from 'react';
import Library from './views/Library';
import axios from 'axios';
import UserProfile from './views/UserProfile';
import { useSetRecoilState } from 'recoil';
import { isLoged } from './atoms';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(null);
  const userLogged = useSetRecoilState(isLoged);
  const [token] = useState(JSON.parse(localStorage.getItem('token')));

  useEffect(() => {
    const verify_token = async () => {
      let url = 'http://localhost:4000/user/verify_token';
      try {
        if (!token) {
          setIsLogedIn(false);
          userLogged(isLogedIn);
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
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const login = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setIsLogedIn(true);
    userLogged(isLogedIn);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogedIn(false);
    userLogged(isLogedIn);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga/:id" element={<Item />} />
          <Route path="/manga/library" element={<Library />} />
          <Route path="/user/login" element={<Login login={login} />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/passReset" element={<PasswordReset />} />
          <Route
            path="/user/profile"
            element={<UserProfile logout={logout} />}
          />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
