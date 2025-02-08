'use client';

export default function TheFooter() {
  return (
    <footer className="bg-[#053257] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF4C39]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFB473]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emotional Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-dm-sans mb-6">
              Where Teams Become Stronger Together
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Creating moments that transform colleagues into companions, and workplaces into wonderlands.
            </p>
          </div>

          {/* Trust Elements */}
          <div className="space-y-8">
            {/* Trust Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#FFB473] text-2xl md:text-3xl font-bold font-dm-sans mb-2">500+</div>
                <p className="text-white/60 text-sm">Happy Companies</p>
              </div>
              <div className="text-center">
                <div className="text-[#FFB473] text-2xl md:text-3xl font-bold font-dm-sans mb-2">2000+</div>
                <p className="text-white/60 text-sm">Global Teams Engaged</p>
              </div>
              <div className="text-center">
                <div className="text-[#FFB473] text-2xl md:text-3xl font-bold font-dm-sans mb-2">95%</div>
                <p className="text-white/60 text-sm">Satisfaction Rate</p>
              </div>
            </div>

            {/* Trust Message */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 font-inter text-sm">
                Trusted by forward-thinking companies worldwide to create meaningful team experiences
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm font-inter">
            © {new Date().getFullYear()} Trebound. Creating unforgettable team moments.
          </p>
        </div>
      </div>
    </footer>
  );
} 