import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} =useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                 <img className='productdisplay-main-img' src={product.image} alt="" /> 
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhpJREFUSEu11UmojmEUB/DfNWZjKmwoJRkWlGShiAwpyQIboYgFYkFJ2FLKSiIlkVhIkkiIEkIpQ8RCGXaGjGFhfI7O1efe77vfe+s69fa8w3nO/zzn/z/nbfGfreU/x9cZgB64hG+Yg+9VkusMwBIcyaBxf7SrAe5hXAa9j/FdCTAdl/Exg/bFNFxpBlK1RGcwF7vQrQBtwGnM7wqAUXiEHxieAV/wRyAj8LQjkNoTzMgsByOuIbkOQvckeFkGC4IXJ+hrvMLLmvVslvQfmX5A1Lae/UqCH+THIPtOlquef4BGkv8ArC4v96b3RWxEgL6vIbdtsH7ojzjlYYxFJLM8n9s12gocSOA9WNeMRPTBKczGFyzEudZ99VS0CMcQndsMJLI/j0mIsgTI3dqkGsk05HciQdYUwvc1OMmtDP4Es/CsrV9HfRDZr8X2Mne2NQAIuQ4rM2oKrtXz6QjgOiZjHqLR6tnBJDQSiETaWSOA3kVFn8qmnhiIdxiD/fiJlYiyBF/HcbXofmpnACLzOMHDMhImlBG9FZvRK4N8zbIdwpsEDcl+rsrBpiK/nWXu30ydj86Nu3Ndn+uNIuuhycOC0ownqwLEIIvat1rMohgTt/PFxJTyyBqf6J9VVQFirkSrx98ryNuR97X7o1xbsnzRM89rhuFfv0YkX8AALMXjJt0c5Mfwe1ukOrPqCZrErP656g+nesQ2nr8BTlNiGYtIihQAAAAASUVORK5CYII="/>
                <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.oldprice}</div>
                <div className="productdisplay-right-price-new">${product.newprice}</div>
            </div>
            <div className="productdisplay-right-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem excepturi quis nostrum deserunt inventore ad fugiat atque aliquam voluptates maiores?</div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category: </span>women,T-Shirt,Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern Latests</p>
        </div>
    </div>
  )
}

export default ProductDisplay