import {React} from 'react';
import MyLayout from './components/Layout/MyLayout';
import { Routes, Route } from "react-router-dom";
import HomePage from './containers/HomePage/container/HomePage';
import BlogsPage from './containers/BlogsPage/container/BlogsPage';
import AboutPage from './containers/AboutPage/container/AboutPage';
import SalePage from './containers/SalePage/container/SalePage';
import LoginPage from './containers/LoginPage/container/LoginPage';
import ContactUs from './containers/ContactUs/container/ContactUs';
import LocationCard from './containers/ContactUs/components/LocationCard/LocationCard';
import SignUp from './containers/LoginPage/container/SignUp';

function App() {
  return (
    <div>
      <MyLayout>
        <Routes>
          <Route path='*' element={"Nothing Found"}/>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/log-in' element={<LoginPage/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogsPage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/sale' element={<SalePage/>} />
          <Route path='/contact-us' element={<ContactUs/>}/>
        </Routes>
      </MyLayout>
    </div>
  );
}

export default App;
