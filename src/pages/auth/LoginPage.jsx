import { useUI } from '../../context/UIContext';
import { authApi } from '../../services/endpoints';
import FormField from '../../components/ui/FormField';

export default function LoginPage() {
  const { showToast, setLoading } = useUI();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await authApi.login({ email: 'demo@example.com', password: 'secret123' });
      showToast('Login endpoint connected successfully');
    } catch {
      showToast('Backend connect nahi hua. VITE_API_BASE_URL set karein.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card mx-auto max-w-xl space-y-4">
      <h1 className="page-title">Login</h1>
      <FormField label="EmailInput" type="email" placeholder="you@example.com" />
      <FormField label="PasswordInput" type="password" placeholder="********" />
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> RememberMe</label>
      <a href="#" className="text-sm text-brand-700">ForgotPasswordLink</a>
      <button className="btn-primary w-full" type="submit">LoginButton</button>
    </form>
  );
}
