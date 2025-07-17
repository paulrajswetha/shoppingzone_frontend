import React from 'react'
import './Offers.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
        </div>
        <div className="offers-right">
            <DotLottieReact
      src="https://lottie.host/ce63ca4f-8336-400e-97db-4ee5d38e7f18/57RcGhuyrx.lottie"
      loop
      autoplay
    />
        </div>
    </div>
  )
}

export default Offers