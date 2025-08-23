import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const newsItems = [
  {
    title: 'Penerimaan Santri Baru Tahun Ajaran 2025/2026',
    date: '23 Agustus 2025',
    author: 'Admin',
    excerpt: 'Informasi lengkap mengenai jadwal dan persyaratan pendaftaran santri baru untuk semua jenjang pendidikan.',
    link: '/informasi/berita/penerimaan-santri-baru',
    image: 'https://via.placeholder.com/400x250/FFD700/FFFFFF?text=Berita+1',
  },
  {
    title: 'Kegiatan Muharram: Santunan Anak Yatim dan Dhuafa',
    date: '10 Agustus 2025',
    author: 'Admin',
    excerpt: 'Pondok Pesantren Al-Fattah mengadakan acara santunan dalam rangka menyambut Tahun Baru Islam 1447 H.',
    link: '/informasi/berita/kegiatan-muharram',
    image: 'https://via.placeholder.com/400x250/87CEEB/FFFFFF?text=Berita+2',
  },
  {
    title: 'Workshop Peningkatan Kualitas Guru dan Ustadz',
    date: '01 Agustus 2025',
    author: 'Admin',
    excerpt: 'Pelatihan rutin untuk meningkatkan kompetensi pengajar dalam metode pembelajaran modern dan Islami.',
    link: '/informasi/berita/workshop-guru',
    image: 'https://via.placeholder.com/400x250/90EE90/FFFFFF?text=Berita+3',
  },
];

const NewsSection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h6 className="text-[#fda00f] uppercase font-semibold mb-2">Blog Kami</h6>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white leading-tight">
          Berita & Artikel Terbaru
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                <Link to={item.link} className="hover:text-[#fda00f]">{item.title}</Link>
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>Oleh {item.author}</span>
                <span className="mx-2">|</span>
                <span>{item.date}</span>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                {item.excerpt}
              </CardDescription>
              <Link to={item.link} className="text-[#fda00f] hover:underline font-semibold">
                Baca Selengkapnya &rarr;
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;