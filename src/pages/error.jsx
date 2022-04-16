import { Link } from 'react-router-dom'

const Error = () => {
   return (
      <div>
         <h1>404</h1>
         <h5>Page Not Found</h5>
         <Link to='/' >Back to the Home Page</Link>
      </div>
   )
}

export default Error;