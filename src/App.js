import Home from './pages/home'
import Products from './pages/products';
import Login from './pages/login';
import SharedLayout from './pages/sharedlayout';
import Singleproduct from './pages/singleProduct';
import SharedProductLayout from './pages/sharedProductLayout';
import Error from './pages/error';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './pages/protectedRouteDashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout user={user} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<Singleproduct />} />
          </Route>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='dashboard' element={<ProtectedRoute><Dashboard user={user} /></ProtectedRoute>}></Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
