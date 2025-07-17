import React from 'react'
import './RelatedProduct.css'
import Item from '../Item/Item'
import data_product from '../../assets/data'

const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.newprice} old_price={item.oldprice}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProduct