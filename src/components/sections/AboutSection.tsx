import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="http://fathatulhidayah.sch.id/wp-content/themes/creativ-preschool-fse/assets/images/about-img.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h6 className="text-[#fda00f] uppercase font-semibold mb-2">Tentang Kami</h6>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Kami Membuat Dunia Setiap Anak Lebih Baik
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
            Filosofi kami adalah belajar melalui bermain karena kami menawarkan lingkungan yang merangsang bagi anak-anak.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Program Pra-Sekolah kami dirancang agar siswa menghabiskan hari-hari mereka berpartisipasi dalam kurikulum yang terstruktur namun menyenangkan.
          </p>
          <Button asChild className="bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-full px-8 py-3 text-lg">
            <Link to="/profil/sejarah">Pelajari Lebih Lanjut</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;