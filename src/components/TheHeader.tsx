'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProposalContext } from '@/context/ProposalContext';
import Image from 'next/image';

export default function TheHeader() {
  const pathname = usePathname();
  const { openProposalModal } = useProposalContext();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10">
              <Image
                src="/66f54b982ce090736e4e4d1c_Tewbound Hover.png"
                alt="Trebound Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-inter">
            <Link 
              href="/" 
              className={`relative text-base font-medium transition-all group ${
                isActive('/') 
                  ? 'text-[#053257]' 
                  : 'text-[#053257CC] hover:text-[#FF4C39]'
              }`}
            >
              <span className="relative">
                Home
                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF4C39] transition-all group-hover:w-full ${isActive('/') ? 'w-full' : ''}`}></span>
              </span>
            </Link>
            <Link 
              href="/#activities" 
              className={`relative text-base font-medium transition-all group ${
                isActive('/activities') 
                  ? 'text-[#053257]' 
                  : 'text-[#053257CC] hover:text-[#FF4C39]'
              }`}
            >
              <span className="relative">
                Activities
                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF4C39] transition-all group-hover:w-full ${isActive('/activities') ? 'w-full' : ''}`}></span>
              </span>
            </Link>
            <Link 
              href="/#why-us" 
              className={`relative text-base font-medium transition-all group ${
                isActive('/why-us') 
                  ? 'text-[#053257]' 
                  : 'text-[#053257CC] hover:text-[#FF4C39]'
              }`}
            >
              <span className="relative">
                Why Us
                <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF4C39] transition-all group-hover:w-full ${isActive('/why-us') ? 'w-full' : ''}`}></span>
              </span>
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={openProposalModal}
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FF4C39] text-white text-base font-inter hover:bg-[#FF4C39]/90 transition-all shadow-lg shadow-[#FF4C39]/30 hover:shadow-[#FF4C39]/40 hover:-translate-y-0.5 transform"
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
} 