import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="bg-[#0fbaf4] py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Bagaimana Cara Mendaftarkan Anak Anda ke Pondok Pesantren Kami?
        </h2>
        <Button asChild className="bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-full px-8 py-3 text-lg">
          <Link to="/kontak">Hubungi Kami</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;