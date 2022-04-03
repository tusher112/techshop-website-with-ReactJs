import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className=" container bg-light">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<Notfound></Notfound>}>  </Route>

      </Routes>
    </div>
  );
}

export default App;
