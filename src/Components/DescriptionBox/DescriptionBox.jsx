import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum asperiores pariatur ipsum dolores labore, quibusdam ducimus incidunt quam corporis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, commodi.</p>       
        </div>
    </div>
  )
}

export default DescriptionBox