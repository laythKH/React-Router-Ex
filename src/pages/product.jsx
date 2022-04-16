import { Link } from "react-router-dom"

const Product = ({ item }) => {

   return (
      <div className="card">
         <img src={item.image} alt={item.name} />
         <div className="contentBox">
            <h1>{item.name}</h1>
            <Link to={`${item.id}`} className='link'>More Info</Link>
         </div>
      </div>
   )
}

export default Product 