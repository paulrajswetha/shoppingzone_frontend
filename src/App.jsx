import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import menbanner from './assets/banner/menbanner.jpg'
import womenbanner from './assets/banner/womenbanner.jpg'
import kidsbanner from './assets/banner/kidsbanner.jpg'


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={menbanner} category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory banner={womenbanner} category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kidsbanner} category="kids"/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
