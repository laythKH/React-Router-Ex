import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
   return (
      <>
         <h2 className="title-product">Products</h2>
         <Outlet />
      </>
   )
}

export default SharedProductLayout;