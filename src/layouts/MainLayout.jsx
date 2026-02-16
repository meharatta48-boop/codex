import Footer from '../components/common/Footer';
import LoaderSpinner from '../components/common/LoaderSpinner';
import Navbar from '../components/common/Navbar';
import ToastAlert from '../components/common/ToastAlert';

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-6">{children}</main>
      <Footer />
      <ToastAlert />
      <LoaderSpinner />
    </div>
  );
}
