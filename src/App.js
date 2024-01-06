import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Services from './components/Services';
import Blog from './components/Blog';
import Campaigns from './components/Campaigns'; // Corrected the typo
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HeaderNavbar from './components/HeaderNavbar';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import Campagion1 from './components/campagionsOfGauSeva/Campagion1';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import BlogDetail from './components/BlogDetail';
import BlogColumn from './components/BlogColumn';

function App() {
  return (
    <Router>
      <div>
        <HeaderNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/product' element={<Product />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogdetail' element={<BlogDetail />} />
          <Route path='/blogcolumn' element={<BlogColumn />} />
          <Route path='/campaign' element={<Campaigns />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/productdetail' element={<ProductDetail />} />
          <Route path='/productreview' element={<ProductReview />} />
          <Route path='/campagion1' element={<Campagion1 />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
