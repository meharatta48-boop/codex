import SectionBlock from '../../components/ui/SectionBlock';

const components = ['OrdersTable', 'OrderStatusUpdate', 'OrderDetailModal'];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Orders Management</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
