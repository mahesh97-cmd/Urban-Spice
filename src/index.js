import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Error from './pages/Error';
import About from './pages/About';
import Help from './pages/Help';
import SignIn from './pages/SignIn';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './components/utils/appStore';
import PrivateRoute from './components/PrivateRoute';
import Payment from './pages/Payment';
import Address from './pages/Address';


const router=createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/help",
        element:<Help/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
      },
      
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/payment",
        element:<PrivateRoute Component={Payment}/>
      },
      {
        path:"/address",
        element:<Address/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },

  {
    path:"/register",
    element:<Register/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
