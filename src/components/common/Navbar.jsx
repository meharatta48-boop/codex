import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/orders', label: 'Orders' },
  { to: '/admin', label: 'Admin' },
];

export default function Navbar() {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <Link to="/" className="text-lg font-extrabold text-brand-700">ProCart</Link>
        <input className="input hidden md:block" placeholder="Search products..." />
        <select className="input max-w-48">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
        <nav className="ml-auto hidden gap-4 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm font-medium text-slate-600 hover:text-brand-700">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link to="/cart" className="btn-secondary">Cart</Link>
        <Link to={isLoggedIn ? '/profile' : '/login'} className="btn-primary">
          {isLoggedIn ? user?.name : 'Login'}
        </Link>
      </div>
    </header>
  );
}
