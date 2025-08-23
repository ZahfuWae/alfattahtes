import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TkItPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">TK IT Fathatul Hidayah</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <img
            src="http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT.jpg"
            alt="TK IT Fathatul Hidayah"
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
          <p className="mb-4">
            TK IT Fathatul Hidayah adalah lembaga pendidikan anak usia dini yang berfokus pada pembentukan karakter Islami, pengembangan kognitif, motorik, sosial-emosional, dan bahasa anak melalui metode pembelajaran yang menyenangkan dan interaktif.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Visi</h2>
          <p className="mb-4">
            Menjadi Taman Kanak-kanak Islam Terpadu unggulan yang melahirkan generasi Qur'ani, cerdas, mandiri, dan berakhlak mulia.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Misi</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam dalam setiap aspek pembelajaran.</li>
            <li>Mengembangkan potensi anak secara optimal sesuai dengan tahapan perkembangannya.</li>
            <li>Menciptakan lingkungan belajar yang aman, nyaman, dan kondusif untuk tumbuh kembang anak.</li>
            <li>Membiasakan anak dengan adab dan akhlak Islami sejak dini.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Program Unggulan</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Tahfidz Juz Amma</li>
            <li>Pembelajaran Iqra' dan Al-Qur'an</li>
            <li>Sentra Bermain (Sentra Persiapan, Sentra Balok, Sentra Bahan Alam, Sentra Seni)</li>
            <li>Kegiatan Ekstrakurikuler (Mewarnai, Menari Islami, Bercerita)</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TkItPage;