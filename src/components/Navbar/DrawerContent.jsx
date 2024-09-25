import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { FaChevronRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { useCurrentUser } from "../../contexts/userContext"; // Import the custom hook

const DrawerContent = ({ closeDrawer, isOpen }) => {
  const menuItems = [
    { name: 'New In', icon: 'https://www.gepaghana.org/import/wp-content/uploads/sites/2/2017/11/UniMult.jpg', route: '/new-in' },
    { name: 'All Products', icon: 'https://www.nicepng.com/png/detail/392-3920852_nestl-productos-nestle-png.png', route: '/all' },
    // { name: 'Men Clothing', icon: 'https://img.freepik.com/free-photo/men-clothes-accessories_23-2147689458.jpg', route: '/men-clothing' },
    // { name: 'Women Clothing', icon: 'https://img.freepik.com/free-photo/modish-african-american-woman-red-shirt-jeans-skirt-with-jacket-posed-clothes-store-it-s-time-shopping_627829-13519.jpg', route: '/women-clothing' },
    // { name: 'Perfumes', icon: 'https://img.freepik.com/free-photo/bottle-perfume-with-word-perfume-it_1340-37488.jpg', route: '/perfumes' },
    // { name: 'Mobile Phones', icon: 'https://img.freepik.com/premium-photo/two-pink-phones-are-side-by-side-one-is-pink-blue_937196-2893.jpg', route: '/mobile-phones' },
    // { name: 'Laptops', icon: 'https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg', route: '/laptops' },
    // { name: 'Shoes & Footwear', icon: 'https://img.freepik.com/free-photo/composition-fathers-day-with-shoes_23-2147790942.jpg', route: '/shoes-footwear' },
    // { name: 'Jewelry & Accessories', icon: 'https://img.freepik.com/free-photo/display-shiny-elegant-gold-chain_23-2149635328.jpg', route: '/jewelry-accessories' },
  ];

  const { currentUser } = useCurrentUser(); // Fetch current user from context

  // Close the drawer when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && event.target.closest('.drawer-content') === null) {
        closeDrawer();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeDrawer]);

  return (
    <div className="fixed left-0 top-0 h-full w-[350px] bg-white shadow-lg p-4 drawer-content">
      {/* Close Icon */}
      <div className="flex justify-between items-center mb-4 mt-3">
        <h2 className="text-2xl font-bold text-black">THONKET</h2>
        <FaTimes 
          onClick={closeDrawer} 
          className="cursor-pointer text-black" 
          size={24} 
        />
      </div>

      {/* My Account Section */}
      <Link to="/profile" className="flex items-center space-x-3 mb-4" onClick={closeDrawer}>
        {currentUser ? (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
            <span className="text-lg font-medium text-gray-800">
              {currentUser.firstName ? currentUser.firstName.charAt(0).toUpperCase() : currentUser.email.charAt(0).toUpperCase()}
            </span>
          </div>
        ) : (
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <span className="text-lg font-medium text-gray-800">My Account</span>
      </Link>

      <Divider className="mt-2 mb-4" />

      {/* Navigation Menu */}
      <List>
        {menuItems.map((item, index) => (
          <Link 
            to={item.route} 
            key={index} 
            onClick={closeDrawer} 
            className="no-underline text-black"
          >
            <ListItem button className="flex items-center space-x-3">
              {/* Circular Image */}
              <img src={item.icon} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
              
              {/* Menu Item Text */}
              <ListItemText primary={item.name} className="text-lg text-gray-700" />
              
              {/* Right Arrow */}
              <FaChevronRight className="text-gray-500" />
            </ListItem>
          </Link>
        ))}
      </List>

      <Divider className="my-4" />

    </div>
  );
};

export default DrawerContent;
