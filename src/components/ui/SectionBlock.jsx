export default function SectionBlock({ title, subtitle }) {
  return (
    <section className="card">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{subtitle || `${title} component ready for backend integration.`}</p>
    </section>
  );
}
