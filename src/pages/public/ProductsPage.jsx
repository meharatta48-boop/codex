import SectionBlock from '../../components/ui/SectionBlock';

const components = ['ProductFilter (price, category)', 'SortDropdown', 'ProductGrid', 'ProductCard', 'Pagination'];

export default function ProductsPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Shop / Products</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
