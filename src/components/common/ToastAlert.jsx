import { useUI } from '../../context/UIContext';

export default function ToastAlert() {
  const { toast } = useUI();
  if (!toast) return null;

  return (
    <div className="fixed right-4 top-20 z-50 rounded-xl bg-slate-900 px-4 py-3 text-sm text-white shadow-lg">
      {toast.message}
    </div>
  );
}
