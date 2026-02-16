import { useParams } from 'react-router-dom';
import SectionBlock from '../../components/ui/SectionBlock';

const components = ['OrderInfo', 'ShippingInfo', 'PaymentInfo', 'OrderedProducts', 'OrderStatusTimeline'];

export default function OrderDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="page-title">Order Detail #{id}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
