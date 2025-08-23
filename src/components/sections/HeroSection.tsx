import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/Foto-11-1024x768.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Pondok Pesantren Al-Fattah
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Kami percaya pada komunikasi terbuka dan kolaborasi dengan orang tua, menjadikan Anda bagian integral dari perjalanan pendidikan anak Anda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-full px-8 py-3 text-lg">
            <Link to="/pendaftaran">Daftar Sekarang</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#fda00f] rounded-full px-8 py-3 text-lg">
            <Link to="/profil/sejarah">Pelajari Lebih Lanjut</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;