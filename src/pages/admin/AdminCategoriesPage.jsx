import SectionBlock from '../../components/ui/SectionBlock';

const components = ['CategoryList', 'AddCategoryForm', 'EditCategoryModal'];

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Categories</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
