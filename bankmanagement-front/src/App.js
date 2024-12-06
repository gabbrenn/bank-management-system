import './App.css';
// import './Navbar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Account from './accounts/AddAccount';
import Card from './pages/Card';
import Profile from './pages/Profile';
import ApplyCard from './pages/ApplyCard';

function App() {
  return (
    <Router>
      <div className="container-fluid bg-light vh-100">
        <div className="row h-100">
          {/* Sidebar */}
          <div className="col-12 col-md-3 col-lg-2 bg-dark text-white p-0">
            <Navbar />
          </div>
          {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10 overflow-auto text ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/account" element={<Account />} />
              <Route path="/card" element={<Card/>} />
              <Route path='/profile' element={<Profile/>} />
              <Route path='/applycard' element={<ApplyCard/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
