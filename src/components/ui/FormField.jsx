export default function FormField({ label, type = 'text', placeholder = '' }) {
  return (
    <label className="space-y-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input type={type} placeholder={placeholder} className="input" />
    </label>
  );
}
