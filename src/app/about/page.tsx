import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/team/john-smith.jpg',
    bio: 'With over 15 years of experience in business strategy and digital transformation.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Operations',
    image: '/team/sarah-johnson.jpg',
    bio: 'Expert in streamlining business processes and improving operational efficiency.',
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: '/team/michael-chen.jpg',
    bio: 'Leading our technical initiatives with innovative solutions and cutting-edge technology.',
  },
  {
    name: 'Emily Brown',
    role: 'Marketing Director',
    image: '/team/emily-brown.jpg',
    bio: 'Driving brand growth and market presence through strategic marketing initiatives.',
  },
];

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Team Members', value: '50+' },
];

export default function AboutPage() {
  return (
    <>
      {/* About Header */}
      <section className="bg-secondary-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              About Trebound
            </h1>
            <p className="text-lg text-secondary/70">
              We&apos;re on a mission to help businesses grow and succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-secondary">
                Our Story
              </h2>
              <p className="text-secondary/70">
                Founded in 2014, Trebound has been at the forefront of business transformation and growth. We started with a simple mission: to make business growth accessible to companies of all sizes.
              </p>
              <p className="text-secondary/70">
                Today, we&apos;re proud to have helped hundreds of businesses achieve their goals through our innovative solutions and expert guidance. Our team of dedicated professionals brings together years of experience across various industries.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-secondary/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="Trebound Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-secondary text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries to deliver cutting-edge solutions.',
                icon: '💡',
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency and honest relationships.',
                icon: '🤝',
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do.',
                icon: '⭐',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-secondary/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary mb-4">
              Meet Our Team
            </h2>
            <p className="text-secondary/70">
              Our diverse team of experts is passionate about helping businesses succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-secondary/70">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 