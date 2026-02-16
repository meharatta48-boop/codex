import { useUI } from '../../context/UIContext';

export default function LoaderSpinner() {
  const { loading } = useUI();
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-40 grid place-items-center bg-black/30">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-brand-600" />
    </div>
  );
}
