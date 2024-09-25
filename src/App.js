import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignIn from "./pages/ProfilePage/LoginPage";
import SignUp from "./pages/ProfilePage/SignUp";
import { CurrentUserProvider } from "./contexts/userContext"; 
import PaymentOption from "./pages/ProfilePage/PaymentOption";
import Order from "./pages/ProfilePage/Order";
import OrderItem from "./pages/Order/OrderItem";
import Checkout from "./pages/Order/Checkout";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/payment-options" element={<PaymentOption />} />
          <Route path="/order" element={<Order />} />
          <Route path="/detailspage/:id" element={<DetailPage />} />
          <Route path="/cart-item" element={<OrderItem />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

const ConditionalNavbar = () => {
  const location = useLocation();
  
  const noNavbarRoutes = ['/profile', '/sign-in', '/sign-up'];
  
  return !noNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
}

export default App;
