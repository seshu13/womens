export function TeamIcon() {
  return (
    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

export function WellnessIcon() {
  return (
    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
    </svg>
  );
}

export function CreativityIcon() {
  return (
    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

export function LeadershipIcon() {
  return (
    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  );
}

export function CompanyIcon() {
  return (
    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 7h-9"></path>
      <path d="M14 17H5"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>
  );
}

export function ActivityIcon({ id }: { id: string }) {
  switch (id) {
    case 'art-workshop':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case 'golf-training':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 18v-2m0 0V8m0 8h8m-8 0H4" />
          <circle cx="12" cy="5" r="3" />
        </svg>
      );
    case 'lipstick-making':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2v8M12 14v8M12 10a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      );
    case 'wine-tour':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M8 22h8M12 11v11M12 11a6 6 0 006-6V3a2 2 0 00-2-2H8a2 2 0 00-2 2v2a6 6 0 006 6z" />
        </svg>
      );
    case 'wellness':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
        </svg>
      );
    case 'self-defense':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'bike-riding':
      return (
        <svg className="w-6 h-6 text-[#FF4C39]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
        </svg>
      );
    default:
      return null;
  }
} 