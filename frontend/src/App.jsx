import {Routes , Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import AddAddress from './pages/AddAddress';
import Books from './pages/Books';
import BookDetails from './pages/Bookdetails';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { use, useContext } from 'react';
import { AppContext } from './context/AppContext';
import AdminLayout from './pages/admin/AdminLayout';
import ProductList from './pages/admin/ProductList';
import About from './pages/About';
import AddProduct from './pages/admin/AddProduct';
import Orders from './pages/admin/Orders';
import AdminLogin from './pages/admin/AdminLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  const isAdminPath=useLocation().pathname.includes('admin');
  const { isAdmin,navigate } =useContext(AppContext);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32  ">
      <Toaster />
      {isAdminPath ? null : <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/add-address' element={<AddAddress />} />
        <Route path='/books' element={<Books />} />
        <Route path='/book/:id' element={<BookDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path='/admin' element={isAdmin?<AdminLayout /> : <AdminLogin />}>
        <Route index element={isAdmin?<ProductList /> : null} />
        <Route path='add-product' element={isAdmin?<AddProduct /> : null} />
        
        <Route path='orders' element={isAdmin?<Orders /> : null} />
        </Route>
      </Routes>
      {isAdminPath ? null : <Footer />}
    </div>
  );
};

export default App;
