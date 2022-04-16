import products from '../data'
import Product from './product'


const Products = () => {
   return (
      <div className='products'>
         <div className='container'>
            {
               products.map((item) => {
                  return <Product item={item} />
               })
            }
         </div>
      </div>
   )
}

export default Products;