import React from 'react';
import { useNavigate } from 'react-router-dom';

const orders = [
  {
    id: 1,
    name: 'Bag of Rice THONKET',
    imageSrc: 'https://agrigoldmagazine.com/wp-content/uploads/2022/01/Wilmar.jpg',
    imageAlt: "Frytol",
    price: '$35',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Nestle Milo',
    imageSrc: 'https://d2t3trus7wwxyy.cloudfront.net/catalog/product/m/i/milo-cereal-330g_2.jpg',
    imageAlt: "Nestle Milo",
    price: '$50',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Nestle Milo',
    imageSrc: 'https://d2t3trus7wwxyy.cloudfront.net/catalog/product/m/i/milo-cereal-330g_2.jpg',
    imageAlt: "Nestle Milo",
    price: '$50',
    quantity: 1,
  },
  // Add more orders as necessary
];

export default function OrderItem() {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return orders.reduce((total, order) => {
      const priceNumber = parseFloat(order.price.replace('$', ''));
      return total + priceNumber * order.quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white  rounded-lg overflow-hidden mt-4">
      <div className="px-4 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-500 font-medium"
        >
          Close
        </button>
      </div>

      <div className="px-4 py-6">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {orders.map((order) => (
              <li key={order.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    alt={order.imageAlt}
                    src={order.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="/detailspage">{order.name}</a>
                      </h3>
                      <p className="ml-4">{order.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Qty: {order.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${calculateTotal()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
       
            <div  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            onClick={() => navigate('/checkout')}>
            Proceed to Payment

            </div>    

        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
