import { useParams } from 'react-router-dom';
import SectionBlock from '../../components/ui/SectionBlock';

const components = ['ProductGallery', 'ProductInfo', 'PriceBox', 'AddToCartButton', 'QuantitySelector', 'ProductTabs', 'Description', 'Reviews', 'RelatedProducts'];

export default function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="page-title">Product Detail #{id}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
