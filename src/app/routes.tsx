import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'menu', Component: Menu },
      { path: 'products', Component: Products },
      { path: 'products/:id', Component: ProductDetails },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'about', Component: About },
      { path: '*', Component: NotFound },
    ],
  },
]);