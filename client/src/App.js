import './App.css';
import Home from './components/Home';
import Pets from './components/Pets';
import Admin from './components/Admin';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp';
import { useAuth } from './context/AuthProvider';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';


function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
  <>
<div className=" dark:bg-slate-900 dark:text-white">
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/allpets' element={authUser? <Pets/> : <Navigate to="/signup" />}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/admin' element={<Admin/>}/>
<Route path='/about' element={<AboutUs/>}/>
<Route path='/contact' element={<ContactUs/>}/>

</Routes>
<Footer/>
<Toaster/>

</div>
  </>
  );
}

export default App;
