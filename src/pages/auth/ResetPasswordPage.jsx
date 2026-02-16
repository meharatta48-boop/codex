import { useParams } from 'react-router-dom';
import FormField from '../../components/ui/FormField';

export default function ResetPasswordPage() {
  const { token } = useParams();

  return (
    <form className="card mx-auto max-w-xl space-y-4">
      <h1 className="page-title">Reset Password</h1>
      <p className="text-xs text-slate-500">Token: {token}</p>
      <FormField label="NewPasswordInput" type="password" placeholder="********" />
      <FormField label="ConfirmPasswordInput" type="password" placeholder="********" />
      <button className="btn-primary w-full" type="submit">ResetButton</button>
    </form>
  );
}
