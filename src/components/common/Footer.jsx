export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-4">
        <div>
          <h3 className="font-bold">About</h3>
          <p className="text-sm text-slate-600">Professional ecommerce UI built with React + Tailwind.</p>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="text-sm text-slate-600">support@procart.com</p>
        </div>
        <div>
          <h3 className="font-bold">Social</h3>
          <p className="text-sm text-slate-600">Instagram • Facebook • LinkedIn</p>
        </div>
        <div>
          <h3 className="font-bold">Copyright</h3>
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ProCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
