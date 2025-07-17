import React, { useContext, useState,useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const[menu,setMenu]=useState("shop");
  const menuRef =useRef();
 const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
 }

  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src="https://ik.imagekit.io/ngganqvhn/4bfc89a4b38d9b8dedc0c54c1f8ee573.jpg" alt="logo image" width="80px" height="70px"/>
            <p>SHOPPING ZONE</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANZJREFUSEvt081pAlEUhuFHsIcEVBJMmggi9mEDggXYRlZu3KWUECRN+I+C6SGIHBhBYmbmuhBczF0O33zvOe/Mrbnxqd24XwUoNVwpun9FI3zgJ2fUB/TxnrdK0UceYow5etj9KWngEy8YYPIfpAjwiC+8Yo3OGSTKp3jCDF3srwVEPiDfeD6DxPNT+QpveeURTLkHzUxFG0vU0cIiU7ct+pVSAPF+QEJXbBInJg8theWpG5wGDEjo+k0tvxYQ+djggE3pDcsCqYpS+y5yFaBUXaWoVNERTkIfGckggW4AAAAASUVORK5CYII="/>
        <ul ref={menuRef}  className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu=="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu=="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
            <li ><Link to="/cart"><img className='nav-cart' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUtJREFUSEvN1CEsRXEUx/HPmxGINtNMpgkkSRE0QWEkQ1GYZBNtIiaYoZigCYogGUEiKIpiI5hNMIH7t3u3t7f37v3zPHPKDf/f/3zPOb/zvyUNjlKD8/tTwEfazSu2Mf8b3ZV3kAGyvEM4rRdSbUSLWMUxRhoBaMcDmtCF+3ogtUzex3gdiQ8xFu7XAgzgvA7ADXrzAOHsGj2YxF4kLOgmsJT6mPsOprGFS/RHANrwhJbkXiceizpoTUXh24erAsgUdnCC4Uxb9JLXE8gcdhES5MUZBlNzg8lfUQQIHgQv3tCBlxqE7mT2d8nrf05177GAoMsqW8BaDcAKllPPZso1RR0EbdjngwiTgySs98V3Ac24TVY1jCEvjpJxjlYKYjqILL66LBawgdnEwM10q8qz5Z0VblGWqPxXXllU3lk0oOEd/NiHWA/+L+ATZAU1GbaBb8sAAAAASUVORK5CYII="/></Link></li>
            <li><div className="nav-cart-count1">{ getTotalCartItems () }</div></li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}> Logout</button> :<Link to="/login"><button>Login</button></Link>}
            <Link to="/cart"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUtJREFUSEvN1CEsRXEUx/HPmxGINtNMpgkkSRE0QWEkQ1GYZBNtIiaYoZigCYogGUEiKIpiI5hNMIH7t3u3t7f37v3zPHPKDf/f/3zPOb/zvyUNjlKD8/tTwEfazSu2Mf8b3ZV3kAGyvEM4rRdSbUSLWMUxRhoBaMcDmtCF+3ogtUzex3gdiQ8xFu7XAgzgvA7ADXrzAOHsGj2YxF4kLOgmsJT6mPsOprGFS/RHANrwhJbkXiceizpoTUXh24erAsgUdnCC4Uxb9JLXE8gcdhES5MUZBlNzg8lfUQQIHgQv3tCBlxqE7mT2d8nrf05177GAoMsqW8BaDcAKllPPZso1RR0EbdjngwiTgySs98V3Ac24TVY1jCEvjpJxjlYKYjqILL66LBawgdnEwM10q8qz5Z0VblGWqPxXXllU3lk0oOEd/NiHWA/+L+ATZAU1GbaBb8sAAAAASUVORK5CYII="/></Link>
            <div className="nav-cart-count">{ getTotalCartItems () }</div>
        </div>
    </div>
  )
}

export default Navbar

//id,name,category-women,image,newprice,old price -36
//let Allproduct