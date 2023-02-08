import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Abouts from './components/Abouts';
import Courses from './components/Courses';
import RikkeiSoft from './components/RikkeiSoft';
import RikkeiAcademy from './components/RikkeiAcademy';
import AboutIndex from './components/AboutIndex';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Checkout from './components/Checkout';
import CourseDetail from './components/CourseDetail';
import CourseDetailByType from './components/CourseDetailByType';
import PrivateRouter from './components/PrivateRouter';
import Account from './components/Account';
import Personal from './components/Personal';
function App() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'red' : 'black',
      backgroundColor: isActive ? 'black' : 'red'
    }
  }
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to={'/'} style={navLinkStyle}>Trang chủ</NavLink></li>
          <li>
            <Link to={'/abouts'}>Giới thiệu</Link>
            <ul>
              <li><NavLink to={'/abouts/rikkeisoft'} style={navLinkStyle}>Rikkei Soft</NavLink></li>
              <li><NavLink to={'/abouts/rikkeiacademy'} style={navLinkStyle}>Rikkei Academy</NavLink></li>
            </ul>
          </li>
          <li><NavLink to={'/courses'} style={navLinkStyle}>Khóa học</NavLink></li>
        </ul>
      </nav>
      {/* Định tuyến - map URL với component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />}>
          <Route index element={<AboutIndex />} />
          <Route path='rikkeisoft' element={<RikkeiSoft />} />
          <Route path='rikkeiacademy' element={<RikkeiAcademy />} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />
        <Route path='/courses/:courseId/:courseType' element={<CourseDetailByType />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route element={<PrivateRouter />}>
          <Route path='/account' element={<Account />} />
          <Route path='/personal' element={<Personal />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
