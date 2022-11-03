// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';


function App() {

  const user = useSelector(state=>state.user)
 
  return (
  <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        { user.email||localStorage.userInfo.length > 20 ? 
        <>
          <Route path ='/home/*' element={<Home/>} />
        </> :
        <></>
        }
      </Routes>
  </>
  );
}

export default App;
