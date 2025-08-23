import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SambutanPimpinanPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Sambutan Pimpinan Pondok Pesantren Al-Fattah</h1>
        <div className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Assalamu'alaikum Warahmatullahi Wabarakatuh.
          </p>
          <p className="mb-4">
            Dengan rasa syukur kehadirat Allah SWT, kami menyambut Anda di website resmi Pondok Pesantren Al-Fattah. Kami berkomitmen untuk mencetak generasi muslim yang berakhlak mulia, berilmu amaliah, dan beramal ilmiah.
          </p>
          <p className="mb-4">
            Pondok Pesantren Al-Fattah adalah lembaga pendidikan Islam yang memadukan kurikulum agama dan umum, dengan harapan santri-santri kami dapat menjadi pribadi yang unggul di dunia dan akhirat.
          </p>
          <p className="mb-4">
            Terima kasih atas kepercayaan Anda kepada kami. Semoga Allah SWT senantiasa melimpahkan rahmat dan hidayah-Nya kepada kita semua.
          </p>
          <p className="font-semibold mt-8">
            Wassalamu'alaikum Warahmatullahi Wabarakatuh.
          </p>
          <p className="mt-2 text-xl font-bold text-[#554e9f]">
            Kyai Zaenal Abidin
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Pimpinan Pondok Pesantren Al-Fattah
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SambutanPimpinanPage;