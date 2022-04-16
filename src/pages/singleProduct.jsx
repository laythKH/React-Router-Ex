import { useParams, Link } from "react-router-dom";
import products from '../data'


const Singleproduct = () => {
   const { productId } = useParams();
   const product = products.find((product) => product.id === productId)
   const { image, name, desc, price } = product
   return (
      <div className="single-product">
         <div className="container">
            <div className="contentBox">
               <h1 className="name">{name}</h1>
               <p className="desc">{desc}</p>
               <p className="price">Price {price} $</p>
               <Link to='/products' >Back to products</Link>
            </div>
            <img src={image} alt={name} />
         </div>
      </div>
   )
}

export default Singleproduct;