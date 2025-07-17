import React, { useEffect, useState } from 'react'
import './Newcollections.css'
import Item from '../Item/Item'

const Newcollections = () => {
  const [newcollection, setNewcollection] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then(response => response.json())
      .then(data => setNewcollection(data))
      .catch(err => console.error('Failed to fetch:', err))
  }, [])

  return (
    <div className='Newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollection.length === 0 ? (
          <p>Loading collections...</p>
        ) : (
          newcollection.map((item, i) => (
            <Item
              key={item.id || i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.newprice}
              old_price={item.oldprice}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Newcollections
