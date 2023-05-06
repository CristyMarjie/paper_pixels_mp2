import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorView from './component/Customer/Home/ErrorView';
import Faqs from './component/Customer/Faqs/Faqs';
import MainPage from './component/Customer/MainPage/MainPage';
import AllProducts from './component/Customer/AllProducts/AllProducts';
import Product from './component/Admin/Product/Product';
import Order from './component/Admin/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path: '/main',
        element: <MainPage />,
      },
      {
        path: '/allproducts',
        element: <AllProducts />,
      },
      {
        path: '/admin/products',
        element: <Product />,
      },
      {
        path: '/admin/orders',
        element: <Order />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index.html
// ^--- index.js
//      ^----- App.js
//            ^--------TaskList
//            ^--------TaskCreate