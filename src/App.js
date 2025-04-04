import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AdminRoute from './components/auth/AdminRoute';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import InitialSetup from './components/admin/InitialSetup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import DoctorBooking from './components/booking/DoctorBooking';
import UserOrders from './pages/UserOrders';
import UserBookings from './pages/UserBookings';

// Import context providers
import { AlertProvider } from './context/AlertContext';
import { UserProvider } from './context/UserContext';

// Layout component to conditionally render Navbar and Footer
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  
  return (
    <div className="App min-h-screen bg-secondary-light text-primary-dark flex flex-col">
      {!isAdminPage && <Navbar />}
      <main className={`flex-grow ${!isAdminPage ? 'pt-20' : ''}`}>
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

function App() {
  useEffect(() => {
    console.log('App component mounted');
  }, []);

  return (
    <AlertProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <Layout>
                <Home />
              </Layout>
            } />
            <Route path="/about" element={
              <Layout>
                <About />
              </Layout>
            } />
            <Route path="/services" element={
              <Layout>
                <Services />
              </Layout>
            } />
            <Route path="/blog" element={
              <Layout>
                <Blog />
              </Layout>
            } />
            <Route path="/contact" element={
              <Layout>
                <Contact />
              </Layout>
            } />
            <Route path="/products" element={
              <Layout>
                <Products />
              </Layout>
            } />
            <Route path="/products/:productId" element={
              <Layout>
                <ProductDetail />
              </Layout>
            } />
            <Route path="/cart" element={
              <Layout>
                <Cart />
              </Layout>
            } />
            <Route path="/book-appointment" element={
              <Layout>
                <DoctorBooking />
              </Layout>
            } />
            <Route path="/my-orders" element={
              <Layout>
                <UserOrders />
              </Layout>
            } />
            <Route path="/my-bookings" element={
              <Layout>
                <UserBookings />
              </Layout>
            } />
            <Route path="/admin" element={
              <Layout>
                <AdminLogin />
              </Layout>
            } />
            <Route path="/admin/dashboard" element={
              <Layout>
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              </Layout>
            } />
            <Route path="/admin/setup" element={
              <Layout>
                <InitialSetup />
              </Layout>
            } />
            <Route path="*" element={
              <Layout>
                <div className="py-20 text-center">
                  <h1 className="text-4xl font-bold text-primary mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
                  <Link to="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark inline-block">
                    Go Home
                  </Link>
                </div>
              </Layout>
            } />
          </Routes>
        </Router>
      </UserProvider>
    </AlertProvider>
  );
}

export default App; 