import SectionBlock from '../../components/ui/SectionBlock';

const components = ['HeroBanner', 'CategoryCards', 'FeaturedProducts', 'NewArrivals', 'BestSeller', 'PromoBanner', 'NewsletterSignup'];

export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="page-title">Home</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {components.map((name) => (
          <SectionBlock key={name} title={name} />
        ))}
      </div>
    </div>
  );
}
