import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SdItPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">SD IT Fathatul Hidayah</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <img
            src="http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/SD-IT.jpg"
            alt="SD IT Fathatul Hidayah"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <p className="mb-4">
            SD IT Fathatul Hidayah menyelenggarakan pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendidikan agama Islam. Kami berkomitmen untuk membentuk siswa yang memiliki kecerdasan intelektual, emosional, dan spiritual.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Visi</h2>
          <p className="mb-4">
            Mewujudkan generasi sholeh/sholehah, cerdas, mandiri, berprestasi, dan berwawasan global berdasarkan nilai-nilai Islam.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Misi</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Melaksanakan pembelajaran yang aktif, inovatif, kreatif, efektif, dan menyenangkan.</li>
            <li>Menanamkan nilai-nilai keislaman dalam setiap mata pelajaran dan kegiatan sehari-hari.</li>
            <li>Mengembangkan potensi akademik dan non-akademik siswa secara seimbang.</li>
            <li>Membiasakan siswa untuk berakhlak mulia, disiplin, dan bertanggung jawab.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Program Unggulan</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Tahfidz Al-Qur'an (Juz 30, 29, dst.)</li>
            <li>Pembelajaran Bahasa Arab dan Bahasa Inggris</li>
            <li>Ekstrakurikuler (Pramuka, Futsal, Panahan, Kaligrafi, Marawis)</li>
            <li>Pembiasaan Sholat Dhuha dan Dzuhur Berjamaah</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SdItPage;