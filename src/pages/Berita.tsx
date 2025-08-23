import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const allNewsItems = [
  {
    slug: 'penerimaan-santri-baru',
    title: 'Penerimaan Santri Baru Tahun Ajaran 2025/2026',
    date: '23 Agustus 2025',
    author: 'Admin',
    excerpt: 'Informasi lengkap mengenai jadwal dan persyaratan pendaftaran santri baru untuk semua jenjang pendidikan.',
    content: `
      <p>Pondok Pesantren Al-Fattah dengan bangga mengumumkan pembukaan pendaftaran santri baru untuk tahun ajaran 2025/2026. Kami mengundang putra-putri terbaik bangsa untuk bergabung dan menimba ilmu di lingkungan yang kondusif dan Islami.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">Jadwal Pendaftaran:</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Gelombang 1: 1 September - 30 November 2024</li>
        <li>Gelombang 2: 1 Desember 2024 - 28 Februari 2025</li>
        <li>Gelombang 3: 1 Maret - 30 April 2025</li>
      </ul>
      <h2 class="text-2xl font-bold mt-6 mb-3">Persyaratan Umum:</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Mengisi formulir pendaftaran online/offline.</li>
        <li>Fotokopi Akta Kelahiran dan Kartu Keluarga.</li>
        <li>Pas foto terbaru ukuran 3x4 (2 lembar).</li>
        <li>Fotokopi rapor terakhir.</li>
      </ul>
      <p>Untuk informasi lebih lanjut dan pendaftaran online, silakan kunjungi halaman <a href="/pendaftaran" class="text-[#fda00f] hover:underline">Pendaftaran</a> kami.</p>
    `,
    image: 'https://via.placeholder.com/800x450/FFD700/FFFFFF?text=Penerimaan+Santri+Baru',
  },
  {
    slug: 'kegiatan-muharram',
    title: 'Kegiatan Muharram: Santunan Anak Yatim dan Dhuafa',
    date: '10 Agustus 2025',
    author: 'Admin',
    excerpt: 'Pondok Pesantren Al-Fattah mengadakan acara santunan dalam rangka menyambut Tahun Baru Islam 1447 H.',
    content: `
      <p>Dalam rangka menyambut Tahun Baru Islam 1447 Hijriah, Pondok Pesantren Al-Fattah menyelenggarakan kegiatan santunan anak yatim dan dhuafa. Acara ini merupakan wujud kepedulian sosial pesantren dan upaya menanamkan nilai-nilai berbagi kepada para santri.</p>
      <p>Kegiatan yang dilaksanakan pada tanggal 10 Muharram ini dihadiri oleh seluruh civitas akademika pesantren, tokoh masyarakat, serta para donatur. Sebanyak 100 anak yatim dan 50 dhuafa dari sekitar lingkungan pesantren menerima santunan berupa uang tunai dan paket sembako.</p>
      <p>Pimpinan Pondok Pesantren Al-Fattah, Kyai Zaenal Abidin, dalam sambutannya menyampaikan pentingnya berbagi dan peduli terhadap sesama, terutama di bulan Muharram yang penuh berkah ini. Beliau juga mengucapkan terima kasih kepada seluruh pihak yang telah berpartisipasi dan mendukung terselenggaranya acara ini.</p>
    `,
    image: 'https://via.placeholder.com/800x450/87CEEB/FFFFFF?text=Kegiatan+Muharram',
  },
  {
    slug: 'workshop-guru',
    title: 'Workshop Peningkatan Kualitas Guru dan Ustadz',
    date: '01 Agustus 2025',
    author: 'Admin',
    excerpt: 'Pelatihan rutin untuk meningkatkan kompetensi pengajar dalam metode pembelajaran modern dan Islami.',
    content: `
      <p>Pondok Pesantren Al-Fattah secara rutin mengadakan workshop dan pelatihan bagi para guru dan ustadz/ustadzah untuk terus meningkatkan kualitas pengajaran. Workshop terbaru yang dilaksanakan pada awal Agustus ini berfokus pada "Metode Pembelajaran Aktif dan Inovatif di Era Digital".</p>
      <p>Kegiatan ini bertujuan untuk membekali para pengajar dengan strategi dan teknik mengajar yang relevan dengan perkembangan zaman, sehingga proses belajar mengajar menjadi lebih efektif, menarik, dan mampu merangsang kreativitas santri.</p>
      <p>Narasumber dalam workshop ini adalah praktisi pendidikan yang berpengalaman di bidangnya. Para peserta sangat antusias mengikuti setiap sesi, mulai dari diskusi interaktif, simulasi mengajar, hingga sesi tanya jawab.</p>
      <p>Diharapkan dengan adanya workshop ini, kualitas pendidikan di Pondok Pesantren Al-Fattah akan semakin meningkat dan mampu mencetak santri-santri yang berprestasi.</p>
    `,
    image: 'https://via.placeholder.com/800x450/90EE90/FFFFFF?text=Workshop+Guru',
  },
];

const BeritaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const newsItem = allNewsItems.find((item) => item.slug === slug);

  if (slug && newsItem) {
    // Display single news article
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 px-4">
          <article className="max-w-4xl mx-auto">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
            />
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-lg text-gray-500 dark:text-gray-400 mb-8">
              <span>Oleh {newsItem.author}</span>
              <span className="mx-3">|</span>
              <span>{newsItem.date}</span>
            </div>
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />
            <Link to="/informasi/berita" className="mt-12 inline-block text-[#fda00f] hover:underline font-semibold text-lg">
              &larr; Kembali ke Berita Lainnya
            </Link>
          </article>
        </main>
        <Footer />
      </div>
    );
  }

  // Display all news items
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Berita Terbaru</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNewsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  <Link to={`/informasi/berita/${item.slug}`} className="hover:text-[#fda00f]">{item.title}</Link>
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>Oleh {item.author}</span>
                  <span className="mx-2">|</span>
                  <span>{item.date}</span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.excerpt}
                </CardDescription>
                <Link to={`/informasi/berita/${item.slug}`} className="text-[#fda00f] hover:underline font-semibold">
                  Baca Selengkapnya &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeritaPage;