import SectionBlock from '../../components/ui/SectionBlock';

const components = ['AdminSidebar', 'StatsCards', 'SalesChart', 'RecentOrders'];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Admin Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
