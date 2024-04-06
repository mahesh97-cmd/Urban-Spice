import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
// import Login from './pages/Login';



function App() {
  return (
    
    <>
    
    <Header/>
    <Outlet/>
    {/* <Body/> */}
    <Footer/>
    </>
   
  );
}

export default App;
