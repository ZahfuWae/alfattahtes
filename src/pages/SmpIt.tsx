import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SmpItPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">SMP IT Fathatul Hidayah</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <img
            src="http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/Qiroah2.png" // Placeholder image
            alt="SMP IT Fathatul Hidayah"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <p className="mb-4">
            SMP IT Fathatul Hidayah hadir sebagai jenjang pendidikan menengah pertama yang berupaya mencetak generasi muda yang tidak hanya unggul dalam ilmu pengetahuan, tetapi juga kokoh dalam keimanan dan ketakwaan. Kami membekali siswa dengan keterampilan abad 21 dan pemahaman agama yang mendalam.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Visi</h2>
          <p className="mb-4">
            Menjadi sekolah menengah pertama Islam terpadu yang menghasilkan pemimpin masa depan yang berkarakter Qur'ani, berprestasi akademik, dan berjiwa sosial.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Misi</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Melaksanakan kurikulum terpadu yang memadukan pendidikan nasional dan pendidikan diniyah.</li>
            <li>Mengembangkan potensi kepemimpinan dan kewirausahaan siswa.</li>
            <li>Menciptakan lingkungan belajar yang inspiratif dan mendukung inovasi.</li>
            <li>Membimbing siswa untuk menguasai teknologi dan informasi dengan bijak.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Program Unggulan</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Program Tahfidz Intensif</li>
            <li>Kajian Kitab Kuning</li>
            <li>Pembelajaran Sains dan Matematika Berbasis Proyek</li>
            <li>Ekstrakurikuler Pilihan (Robotik, Jurnalistik, Debat Bahasa Inggris/Arab)</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SmpItPage;