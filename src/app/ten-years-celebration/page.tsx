'use client';

import Image from 'next/image';
import { useProposalContext } from '@/context/ProposalContext';
import AnniversaryProposalModal from '@/components/AnniversaryProposalModal';
import SuccessModal from '@/components/SuccessModal';
import FloatingActionButton from '@/components/FloatingActionButton';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Define milestone data with improved icons
const milestones = [
  { 
    iconSvg: <svg className="w-6 h-6 text-[#FF4C39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12H19M12 2V5M5 12H2M12 19V22M19.0711 19.0711L16.9497 16.9497M19.0711 4.92893L16.9497 7.05026M4.92893 4.92893L7.05026 7.05026M4.92893 19.0711L7.05026 16.9497M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    text: '5000+ Events Hosted', 
    description: 'Over the past decade, we&apos;ve created memorable experiences for thousands of teams.' 
  },
  { 
    iconSvg: <svg className="w-6 h-6 text-[#FF4C39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    text: '1M+ Happy Participants', 
    description: 'We&apos;ve helped over a million professionals connect, collaborate, and grow.' 
  },
  { 
    iconSvg: <svg className="w-6 h-6 text-[#FF4C39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4806 3.49883C11.6728 3.01328 12.3272 3.01328 12.5194 3.49883L14.6607 8.57744C14.7392 8.76052 14.9085 8.88458 15.1064 8.90718L20.6732 9.4855C21.2042 9.54809 21.4202 10.1755 21.016 10.5204L16.9009 14.0835C16.7496 14.2158 16.6815 14.4246 16.7241 14.6257L17.8817 20.0968C17.98 20.6161 17.4695 21.0208 17.0098 20.76L12.2806 17.8484C12.1056 17.7489 11.8944 17.7489 11.7194 17.8484L6.99024 20.76C6.53057 21.0208 6.01998 20.6161 6.11832 20.0968L7.2759 14.6257C7.31853 14.4246 7.25044 14.2158 7.09914 14.0835L2.98397 10.5204C2.57982 10.1755 2.79584 9.54809 3.32679 9.4855L8.89363 8.90718C9.09148 8.88458 9.26078 8.76052 9.33926 8.57744L11.4806 3.49883Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>, 
    text: '98% Satisfaction Rate', 
    description: 'Our dedication to excellence is reflected in our consistently high ratings.' 
  },
  { 
    iconSvg: <svg className="w-6 h-6 text-[#FF4C39]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>, 
    text: '200+ Corporate Partners', 
    description: 'Leading organizations trust us with their most valuable asset—their people.' 
  },
];

// Gallery images from public directory
const galleryImages = [
  '/1.webp',
  '/2.webp',
  '/3.webp',
  '/4.jpg',
  '/5.webp',
  '/6.webp',
];

export default function TenYearsCelebration() {
  const {
    selectedActivities,
    showProposalModal,
    showSuccessModal,
    hasSelectedActivities,
    toggleActivity,
    openProposalModal,
    closeProposalModal,
    closeSuccessModal,
    submitProposal,
    isSubmitting
  } = useProposalContext();

  // Add anniversary activity to selected activities when opening modal
  const handleOpenModal = () => {
    if (!selectedActivities.includes("10th Anniversary Special")) {
      toggleActivity("10th Anniversary Special");
    }
    
    openProposalModal();
  };

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Trebound 10th Anniversary Celebration",
    "description": "Celebrating a decade of delivering transformative corporate team experiences. Special offers on all team-building packages throughout 2025.",
    "startDate": "2025-01-01",
    "endDate": "2025-06-30",
    "location": {
      "@type": "Place",
      "name": "Trebound Headquarters",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 10 5th Cross Shardamba Nagar",
        "addressLocality": "Bangalore",
        "postalCode": "560001",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Anniversary Special Discount",
      "description": "20% off on all team-building packages",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "validThrough": "2025-06-30",
      "url": "https://www.trebound.com/ten-years-celebration"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Trebound",
      "url": "https://www.trebound.com"
    }
  };

  return (
    <>
      <Script
        id="anniversary-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#F9F9F9] font-inter">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#053257]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop"
              alt="Team celebrating together"
              fill
              className="object-cover opacity-25"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#053257] via-[#053257]/95 to-[#053257]/90"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Updated celebration icon */}
              <motion.div 
                className="inline-block mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mx-auto relative">
                  <svg className="w-14 h-14 text-[#FFB473]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8561 2.35441C13.0185 2.10346 12.1214 2 11.2 2C6.2353 2 2.2 6.03529 2.2 11C2.2 15.9647 6.2353 20 11.2 20C16.1647 20 20.2 15.9647 20.2 11C20.2 7.81534 18.6274 5.01036 16.2139 3.27396" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14.7348 2.02936C14.947 1.93272 15.1704 1.85272 15.4029 1.79151C16.2801 1.56594 17.2201 1.86705 17.7115 2.63758L18.2326 3.46332C18.4384 3.77839 18.7783 3.9809 19.1529 4.01534L20.1059 4.09252C20.9818 4.16844 21.6773 4.86398 21.7532 5.73985L21.8301 6.69282C21.8645 7.06747 22.067 7.40743 22.3821 7.61327L23.2078 8.13436C23.9784 8.62573 24.2795 9.56574 24.0539 10.4429C23.9927 10.6754 23.9127 10.8988 23.8161 11.111C23.7019 11.3698 23.7019 11.6463 23.8161 11.9052C23.9127 12.1174 23.9927 12.3407 24.0539 12.5732C24.2795 13.4504 23.9784 14.3904 23.2078 14.8818L22.3821 15.4029C22.067 15.6087 21.8645 15.9486 21.8301 16.3233L21.7529 17.2763C21.6769 18.1521 20.9814 18.8477 20.1056 18.9236L19.1526 19.0005C18.778 19.0349 18.438 19.2374 18.2322 19.5525L17.7111 20.3782C17.2197 21.1488 16.2797 21.4499 15.4025 21.2242C15.17 21.163 14.9466 21.0831 14.7344 20.9864C14.4756 20.8723 14.1991 20.8723 13.9402 20.9864C13.728 21.0831 13.5047 21.163 13.2722 21.2242C12.395 21.4499 11.455 21.1488 10.9636 20.3782L10.4425 19.5525C10.2366 19.2374 9.89665 19.0349 9.52203 19.0005L8.56907 18.9236C7.69319 18.8477 6.99765 18.1521 6.92173 17.2763L6.84455 16.3233C6.81011 15.9486 6.6076 15.6087 6.29253 15.4029L5.46679 14.8818C4.69626 14.3904 4.39515 13.4504 4.62072 12.5732C4.68193 12.3407 4.76193 12.1174 4.85857 11.9052C4.97278 11.6463 4.97278 11.3698 4.85857 11.111C4.76193 10.8988 4.68193 10.6754 4.62072 10.4429C4.39515 9.56574 4.69626 8.62573 5.46679 8.13436L6.29253 7.61327C6.6076 7.40743 6.81011 7.06747 6.84455 6.69282L6.92173 5.73985C6.99765 4.86398 7.69319 4.16844 8.56907 4.09252L9.52203 4.01534C9.89665 3.9809 10.2366 3.77839 10.4425 3.46332L10.9636 2.63758C11.455 1.86705 12.395 1.56594 13.2722 1.79151C13.5047 1.85272 13.728 1.93272 13.9402 2.02936C14.1991 2.14358 14.4756 2.14358 14.7344 2.02936H14.7348Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11.2 6.5V11L14.2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF4C39] rounded-full flex items-center justify-center text-white font-bold">
                    10
                  </div>
                </div>
              </motion.div>

              {/* Anniversary Badge */}
              <div className="mb-8 flex justify-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-6 py-2 rounded-full bg-[#FF4C39] text-white font-medium inline-flex items-center gap-2"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  10 Years of Excellence
                </motion.div>
              </div>

              {/* Heading */}
              <motion.h1 
                className="font-dm-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Celebrating a Decade of<br/>
                <span className="text-[#FFB473]">Unforgettable Experiences</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-white/80 max-w-2xl mx-auto mb-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Thank you for being part of our incredible journey
              </motion.p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2 className="font-dm-sans text-4xl font-bold text-[#053257] mb-4">
                  A Decade of Achievements
                </h2>
                <div className="w-24 h-1 bg-[#FF4C39] mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-[#053257]/80 max-w-2xl mx-auto">
                  Over the last 10 years, we&apos;ve been privileged to create transformative experiences for teams across the globe
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Milestones Column */}
                <div className="bg-[#F9F9F9] rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-[#053257] mb-6 font-dm-sans">Our Milestones</h3>
                  
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-5"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                          {milestone.iconSvg}
                        </div>
                        <div>
                          <h4 className="text-xl font-medium text-[#053257]">{milestone.text}</h4>
                          <p className="text-[#053257]/70">{milestone.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Anniversary Special Offer */}
                <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-[#FFB473] relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full border-2 border-[#FFB473] text-[#053257] font-medium text-center w-auto min-w-[200px]">
                    Anniversary Special
                  </div>

                  <div className="text-center pt-6">
                    <h3 className="text-2xl font-bold text-[#053257] mb-4 font-dm-sans">Anniversary Special</h3>
                    
                    <div className="mb-6">
                      <div className="text-6xl font-bold text-[#FF4C39] font-dm-sans">20% OFF</div>
                      <p className="text-[#053257]/70 mt-2">On all team-building packages</p>
                    </div>

                    <div className="bg-[#F9F9F9] rounded-xl p-4 mb-6">
                      <p className="text-[#053257]/80">Valid until June 30, 2025</p>
                    </div>

                    <button
                      onClick={handleOpenModal}
                      className="w-full px-6 py-4 rounded-xl bg-[#FF4C39] text-white font-medium hover:bg-[#FF4C39]/90 transition-all shadow-lg hover:-translate-y-0.5 transform flex items-center justify-center gap-2"
                    >
                      Get Your Special Discount
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-12">
                <h2 className="font-dm-sans text-4xl font-bold text-[#053257] mb-4">
                  What Our Clients Say
                </h2>
                <div className="w-24 h-1 bg-[#FF4C39] mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-[#053257]/80 max-w-2xl mx-auto">
                  Hear from the teams we&apos;ve had the privilege to work with over the past decade
                </p>
              </header>
              
              <div className="mt-10">
                {/* Reviews Widget */}
                <div data-romw-token="htSPDkjmrIZaOmmTg9kiOL1fSbUeoDl1a04pgwBOzQ99XPODAb"></div>
                <Script
                  src="https://reviewsonmywebsite.com/js/v2/embed.js?id=8ed8fd45a2fd062872f56952886c1ec5"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h2 className="font-dm-sans text-4xl font-bold text-[#053257] mb-4">
                  Memorable Moments
                </h2>
                <div className="w-24 h-1 bg-[#FF4C39] mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-[#053257]/80 max-w-2xl mx-auto">
                  A decade of transforming teams through unforgettable experiences
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Image
                      src={image}
                      alt={`Trebound celebration moment ${index + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button
                  onClick={handleOpenModal}
                  className="inline-flex items-center px-8 py-4 rounded-full bg-[#FF4C39] text-white font-medium hover:bg-[#FF4C39]/90 transition-all shadow-lg hover:-translate-y-0.5 transform"
                >
                  Celebrate With Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Modals */}
        <AnniversaryProposalModal
          show={showProposalModal}
          selectedActivities={selectedActivities}
          onClose={closeProposalModal}
          onSubmit={submitProposal}
          isSubmitting={isSubmitting}
        />

        <SuccessModal
          show={showSuccessModal}
          onClose={closeSuccessModal}
        />

        <FloatingActionButton 
          onClick={handleOpenModal} 
          show={hasSelectedActivities}
          count={selectedActivities.length}
        />
      </main>
    </>
  );
} 