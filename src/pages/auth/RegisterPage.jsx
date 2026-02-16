import FormField from '../../components/ui/FormField';

export default function RegisterPage() {
  return (
    <form className="card mx-auto max-w-xl space-y-4">
      <h1 className="page-title">Register</h1>
      <FormField label="NameInput" placeholder="Full Name" />
      <FormField label="EmailInput" type="email" placeholder="you@example.com" />
      <FormField label="PasswordInput" type="password" placeholder="********" />
      <FormField label="ConfirmPassword" type="password" placeholder="********" />
      <button className="btn-primary w-full" type="submit">RegisterButton</button>
    </form>
  );
}
