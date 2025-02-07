import Link from 'next/link';

const services = [
  {
    title: 'Business Strategy',
    description: 'Develop comprehensive business strategies to achieve your goals.',
    features: [
      'Market Analysis',
      'Competitive Research',
      'Growth Planning',
      'Risk Assessment',
    ],
    icon: '📊',
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions.',
    features: [
      'Process Automation',
      'Cloud Integration',
      'Digital Workflow',
      'Data Analytics',
    ],
    icon: '💻',
  },
  {
    title: 'Marketing Solutions',
    description: 'Boost your market presence with effective marketing strategies.',
    features: [
      'Brand Development',
      'Content Strategy',
      'Social Media',
      'SEO Optimization',
    ],
    icon: '📱',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic Business Analysis',
      '5 Strategy Sessions',
      'Basic Digital Tools',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    price: '$799',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced Business Analysis',
      '15 Strategy Sessions',
      'Full Digital Suite',
      'Priority Support',
      'Monthly Reports',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Comprehensive Analysis',
      'Unlimited Sessions',
      'Custom Solutions',
      '24/7 Support',
      'Dedicated Manager',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Services Header */}
      <section className="bg-secondary-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-secondary/70">
              Comprehensive business solutions tailored to your needs. We help you grow, transform, and succeed in today&apos;s competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-secondary/5 hover:shadow-xl hover:shadow-secondary/10 transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary/70 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              Pricing Plans
            </h2>
            <p className="text-secondary/70">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.featured
                    ? 'ring-2 ring-primary shadow-xl relative'
                    : 'shadow-lg'
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white px-3 py-1 text-sm rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg text-secondary/70">/mo</span>}
                </div>
                <p className="text-secondary/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl transition-colors ${
                    plan.featured
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-secondary-light text-secondary hover:bg-secondary hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 