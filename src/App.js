import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Banner from './components/Home/Banner/Banner';
import HomePage from './components/Home/HomePage/HomePage';
import AboutUs from './components/OtherPages/AboutUs/AboutUs';
import Blog from './components/OtherPages/Blog/Blog';
import Contact from './components/OtherPages/Contact/Contact';
import Main from './layouts/Main/Main';

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

        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
