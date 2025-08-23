import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SejarahPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sejarah Pondok Pesantren Al-Fattah</h1>
        <div className="prose dark:prose-invert mx-auto">
          <p>Pondok Pesantren Al-Fattah didirikan pada tahun 2008 oleh Kyai ZAINAL ABIDIN dan Myai MIFTAHURROHMAH. Pondok Pesantren ini berdiri di bawah naungan Yayasan Fathatul Hidayah. Berawal dari adanya kegiatan Jam’iyyah Fatayat/ Muslimat, yang <em>dipelopori oleh Ustadzah Miftahurrahmah </em>pada tahun 1993 sepulangnya beliau lulus dari Pondok Pesantren. Kegiatan tersebut terus berjalan, hingga pada tahun 1994 beliau menikah dengan <em>Ust. Zaenal Abidin</em>. Maka pada tahun 1994, yang pada mulanya kegiatan Jam’iyyah Muslimat kemudian diresmikan kegiatan itu dengan Mejelis Ta’lim Fathatul Hidayah yang dipimpin oleh <em>Ust. Zaenal Abidin</em>.</p>
          <p>Disisi lain dengan melihat keadaan masyarakat Perbutulan khususnya terhadap anak-anak yang terlihat masih banyak yang tidak bisa mengaji Al-Qur’an, maka pada gilirannya Majelis Ta’lim Fathatul Hidayah mendirikan Lembaga yang berkompeten dalam pengajian Al-Qur’an, yaitu Taman Kanak-kanak Al-Qur’an, Taman Pendidikan Al-Qur’an, dan Ta’limul Qur’an Lilaulad (TKA-TPA-TQA) dikepalai oleh <em>Ustadzah Miftahurrahmah</em>. Lembaga TKA-TPA-TQA ini pula diberi nama Fathatul Hidayah.</p>
          <p>Melihat kurangnya waktu yang diberikan kepada para santri TKA, yang dalam kurikulumnya diperlukan pula pengajaran baca tulis latin, maka pada tahun 2002 waktu penyelenggaraan kegiatan TKA yang pada awalnya diselenggarakan sore hari, kini dialihkan menjadi pagi hari; sampai akhirnya pada tahun 2013 lembaga TKA tersebut diubah perizinannya menjadi TK formal, yaitu Taman Kanak-kanak Islam Terpadu (TK IT) Fathatul Hidayah.</p>
          <p>Lembaga TPA-TQA tersebut juga terus berkembang, hingga memerlukan pula untuk didirikan Lembaga Pendidikan sebagai pendidikan kelanjutan dari TPA-TQA; dan sampai pada tahun 2004 kemudian didirikanlah Madrasah Diniyah Fathatul Hidayah.</p>
          <p>Lembaga Pendidikan tersebut terus berkembang, namun kemudian kami sebagai pengelola merasa ada kesulitan dalam hal pendanaan. Sehubungan dengan hal tersebut, maka kemudian kami berfikir bahwa untuk dapat menembus jalur kepemerintahan diperlukan Lembaga yang memiliki legalitas yang kredibel; dengan itu timbullah inisiatif kami untuk membuat Yayasan yang dapat menaungi lembaga-lembaga yang sudah ada sebelumnya.</p>
          <p>Pada hari Jum’at, tanggal 26 Mei 2026 kami (Zaenal Abidin dan Fatkhul Hilal) menghadap ibu Heny Suryani, SH. sebagai notaris; dan kepada beliau (ibu Heny Suryani, SH) kami utarakan maksud dan tujuan kedatangan kami menghadap beliau. Sampai kemudian berdirilah Yayasan Fathatul Hidayah yang berkedudukan di Jl. Fatahillah Blok Masjid RT/RW 012/005 Kelurahan Perbutulan Kecamatan Sumber Kabupaten Cirebon; dengan izin pendirian Keputusan Kementrian Hukum dan Hak Asasi Manusia RI, Nomor : C-1280.HT.01.02.TH.2006.</p>
          <p>Bersamaan dengan tahun berdirinya Yayasan Fathatul Hidayah, pada tahun 2006 berdiri pula Panti Sosial Asuhan Anak (PSAA), dan yang sekarang disebut Lembaga Kesejahteraan Sosial Anak (LKSA) Fathatul Hidayah. Dari kegiatan LKSA yang kegiatannya kami atur seperti kegiatan pesantren, namun klien LKSA tersebut bersekolahnya di luar panti, maka kami pun merasa resah karena tidak dapat mengontrol kegiatan klien ketika mengikuti kegiatan sekolah di luar panti. Karenanya, pada tahun 2008 kami dirikan SMP satu atap dengan Pondok Pesantren.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SejarahPage;