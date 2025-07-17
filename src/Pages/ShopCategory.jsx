import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../assets/all_product'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  return (

    <div className='shopCategory'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMZJREFUSEvtlE0KwjAQhb/eQXDvpndQ0OuI24I3EfeCBxHEMwh6AGnBK2gHKkTEzA8WN802yXx5b96koOdV9FyfAaA6HLFoDeyAm1od3D1YARvgAswtEK+CMXBqFUyAKzAFmpwSL0BqpZBzp+QrJAJ4QQ5ACWQhUYBARsBRg+QAD0tKkjOiZAbc03u/Bkiy3vrxV4tyDpn8lwIRBRJTU4IiANcMRADLdtC2XfYXQK0lLWJRBewt/1BEgfbgj/2IAhdkAKh2PQESzCgZeI9igwAAAABJRU5ErkJggg=="/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if(props.category == item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price= {item.newprice} old_price={item.oldprice}/>
              

            }
            else{
              return null;
            }
            
        })}
      </div>
      <div className="shopcategory-loadmore">
        Load More
      </div>
    </div>
  )
}

export default ShopCategory