import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage/HomePage';
import ChildrenCollections from './components/Home/ProductsDrawer/ProductsCategory/ChildrenCollections/ChildrenCollections';
import ComputerCollections from './components/Home/ProductsDrawer/ProductsCategory/ComputerCollections/ComputerCollections';
import IpadCollections from './components/Home/ProductsDrawer/ProductsCategory/IpadCollections/IpadCollections';
import MensCollections from './components/Home/ProductsDrawer/ProductsCategory/MensCollections/MensCollections';
import MobileCollections from './components/Home/ProductsDrawer/ProductsCategory/MobileCollections/MobileCollections';
import PrinterCollection from './components/Home/ProductsDrawer/ProductsCategory/PrinterCollection/PrinterCollection';
import WomenCollections from './components/Home/ProductsDrawer/ProductsCategory/WomenCollections/WomenCollections';
import AboutUs from './components/OtherPages/AboutUs/AboutUs';
import Blog from './components/OtherPages/Blog/Blog';
import Contact from './components/OtherPages/Contact/Contact';
import Login from './components/OtherPages/Login/Login';
import Signup from './components/OtherPages/Signup/Signup';
import Main from './layouts/Main/Main';
import ProductsLayout from './layouts/ProductsLayout/ProductsLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: '/categories',
      element: <ProductsLayout></ProductsLayout>,
      children: [
        {
          path: '/categories/computers',
          element: <ComputerCollections></ComputerCollections>
        },
        {
          path: '/categories/mobiles',
          element: <MobileCollections></MobileCollections>
        },
        {
          path: '/categories/ipads',
          element: <IpadCollections></IpadCollections>
        },
        {
          path: '/categories/printers',
          element: <PrinterCollection></PrinterCollection>
        },
        {
          path: '/categories/mens',
          element: <MensCollections></MensCollections>
        },
        {
          path: '/categories/women',
          element: <WomenCollections></WomenCollections>
        },
        {
          path: '/categories/children',
          element: <ChildrenCollections></ChildrenCollections>
        },
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
