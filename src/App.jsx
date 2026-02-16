import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminRoute, ProtectedRoute } from './app/guards';
import MainLayout from './layouts/MainLayout';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import HomePage from './pages/public/HomePage';
import ProductDetailPage from './pages/public/ProductDetailPage';
import ProductsPage from './pages/public/ProductsPage';
import CartPage from './pages/user/CartPage';
import CheckoutPage from './pages/user/CheckoutPage';
import OrderDetailPage from './pages/user/OrderDetailPage';
import OrdersPage from './pages/user/OrdersPage';
import ProfilePage from './pages/user/ProfilePage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:id" element={<OrderDetailPage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
