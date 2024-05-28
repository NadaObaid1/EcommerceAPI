import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import Categories from './components/Categories/Categories.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Background from './components/Background/Background.jsx';
import About from './components/About/About.jsx';
import jwt from "jwt-decode";
import Card from './components/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import ProductsScreen from './components/ProductsScreen/ProductsScreen.jsx';
import Cart from './components/Cart/Cart.jsx';
import ForgetPassword from './components/ForgetPassword/ForgetPassword.jsx';
import Sendcode from './components/SendCode/SendCode.jsx';
import Profile from './components/Profile/Pofile.jsx';
import Order from './components/Order/Order.jsx';

export default function App() {
  const [user, setUser] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);

  function saveCurrentUser() {
    let token = localStorage.getItem('UserToken');
    let decoded = jwt(token);
    return decoded;
  }

  return (
    <Router>
      <Routes>
        <Route path="" element={<LayOut user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="Background" element={<Background />} />
          <Route path="Categories" element={<Categories/>} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Card />} />
          <Route path="Register" element={<Register />} />
          <Route path="LogIn" element={<LogIn info={saveCurrentUser} />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="SendCode" element={<Sendcode />} />
          <Route path="Shop" element={<Cart />} />

          <Route path="/ProductDetails/:productId" element={<ProductDetails/>} />
          <Route path="Order" element={<Order />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="ProductsScreen" element={<ProductsScreen />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}



/*import React, { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LayOut from './components/LayOut/LayOut.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import LogIn from './components/LogIn/LogIn.jsx'
import Products from './components/Products/Products.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Background from './components/Background/Background.jsx'
import About from './components/About/About.jsx'

import jwt from "jwt-decode";
import Card from './components/Card/Card.jsx'
import Footer from './components/Footer/Footer.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'

export default function App() {

  let{user, setUser} = useState(null);
  function saveCurrentUser(){
  let token  = localStorage.getItem('UserToken');
  let decoded = jwt(token);
  console.log(decoded);
}
let routes = createBrowserRouter([
  {path:'', element:<LayOut user={user} setUser={setUser}/>, children:[
    {index: true, element:  <Home/>},
    {path: 'Background', element: <Background/>},
    {path: 'Products', element: <Products/>},
    {path: 'About', element: <About/>},
    {path: 'contact', element: <Card/>},
    {path: 'ProductDetails', element: <ProductDetails/>},
   // {path: 'Carts', element:<ProductedRouter><Carts/></ProductedRouter>},  // الباث وال تو لازم نفس الاشي  الكارت هون ابن صار
    {path: 'Register', element: <Register/>},
    {path: 'LogIn', element: <LogIn info = {saveCurrentUser} />},
    {path: 'Footer', element: <Footer/>},
    {path: '*', element: <NotFound/>}, 
]}
])
  return (
    <RouterProvider router = {routes}></RouterProvider>
  )
}*/
