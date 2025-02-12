import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Trebound',
  description: 'Manage activities and content',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 