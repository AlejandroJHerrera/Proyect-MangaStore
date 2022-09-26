import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Item from './views/Item';
import Login from './views/Login';
import Register from './views/Register';
import PasswordReset from './views/PasswordReset';
import { RecoilRoot } from 'recoil';
import Library from './views/Library';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manga/:id" element={<Item />} />
            <Route path="/manga/library" element={<Library />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/passReset" element={<PasswordReset />} />
          </Routes>
          {/* <Footer/> */}
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
