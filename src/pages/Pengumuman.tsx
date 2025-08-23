import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const announcements = [
  {
    title: 'Libur Idul Adha 1446 H',
    date: '15 Juni 2025',
    content: 'Diberitahukan kepada seluruh santri dan civitas akademika Pondok Pesantren Al-Fattah bahwa libur Idul Adha akan dilaksanakan pada tanggal 16-19 Juni 2025. Kegiatan belajar mengajar akan dimulai kembali pada tanggal 20 Juni 2025.',
  },
  {
    title: 'Rapat Wali Santri Semester Genap',
    date: '05 Juni 2025',
    content: 'Akan diadakan rapat wali santri untuk membahas evaluasi semester genap dan persiapan tahun ajaran baru. Rapat akan dilaksanakan pada hari Sabtu, 22 Juni 2025, pukul 09.00 WIB di Aula Pondok Pesantren Al-Fattah.',
  },
  {
    title: 'Lomba Tahfidz Antar Santri',
    date: '01 Juni 2025',
    content: 'Dalam rangka meningkatkan semangat menghafal Al-Qur\'an, Pondok Pesantren Al-Fattah akan mengadakan lomba tahfidz antar santri pada tanggal 25 Juni 2025. Pendaftaran dibuka mulai hari ini hingga 20 Juni 2025.',
  },
];

const PengumumanPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Pengumuman</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">{announcement.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{announcement.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PengumumanPage;