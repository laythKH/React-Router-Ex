import Navbar from "../component/NavLink/navlink.component";

import { Outlet } from "react-router-dom"

const SharedLayout = ({ user, setUser }) => {
   return (
      <>
         <Navbar user={user} setUser={setUser} />
         <Outlet />
      </>
   )
}

export default SharedLayout;