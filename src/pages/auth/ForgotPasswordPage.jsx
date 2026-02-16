import FormField from '../../components/ui/FormField';

export default function ForgotPasswordPage() {
  return (
    <form className="card mx-auto max-w-xl space-y-4">
      <h1 className="page-title">Forgot Password</h1>
      <FormField label="EmailInput" type="email" placeholder="you@example.com" />
      <button className="btn-primary w-full" type="submit">SendResetLinkButton</button>
    </form>
  );
}
