import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to your API
    console.log({ name, address, deliveryLocation, isUrgent, paymentMethod });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden mt-5">
      <div className="px-4 py-2">
        <h2 className="text-lg font-medium text-gray-900">Checkout</h2>
      </div>

      <form onSubmit={handleSubmit} className="px-4 py-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="delivery-location" className="block text-sm font-medium text-gray-700">
            Delivery Location
          </label>
          <input
            type="text"
            id="delivery-location"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Select delivery location from map"
          />
          {/* Here you could integrate a map component to choose delivery location */}
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isUrgent}
              onChange={() => setIsUrgent(!isUrgent)}
              className="form-checkbox h-5 w-5 text-indigo-600"
            />
            <span className="ml-2 text-sm text-gray-700">Urgent Delivery</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="card">Card Payment</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
            {/* Add other payment options as necessary */}
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
