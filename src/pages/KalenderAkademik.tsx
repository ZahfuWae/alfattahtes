import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const academicCalendar = [
  { date: '15 Juli 2025', event: 'Awal Tahun Ajaran Baru 2025/2026' },
  { date: '20 Juli 2025', event: 'Masa Orientasi Santri Baru (MOSBA)' },
  { date: '17 Agustus 2025', event: 'Upacara Peringatan HUT RI' },
  { date: '10 September 2025', event: 'Ujian Tengah Semester Ganjil' },
  { date: '20 Oktober 2025', event: 'Pembagian Rapor Tengah Semester Ganjil' },
  { date: '15 Desember 2025', event: 'Ujian Akhir Semester Ganjil' },
  { date: '25 Desember 2025 - 05 Januari 2026', event: 'Libur Semester Ganjil' },
  { date: '06 Januari 2026', event: 'Awal Semester Genap' },
  { date: '10 Maret 2026', event: 'Ujian Tengah Semester Genap' },
  { date: '20 April 2026', event: 'Pembagian Rapor Tengah Semester Genap' },
  { date: '15 Mei 2026', event: 'Ujian Akhir Semester Genap' },
  { date: '01 Juni 2026', event: 'Wisuda Santri Akhir' },
  { date: '05 Juni 2026 - 14 Juli 2026', event: 'Libur Kenaikan Kelas' },
];

const KalenderAkademikPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Kalender Akademik 2025/2026</h1>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableCaption>Jadwal kegiatan akademik Pondok Pesantren Al-Fattah.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Tanggal</TableHead>
                <TableHead>Kegiatan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicCalendar.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.date}</TableCell>
                  <TableCell>{item.event}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KalenderAkademikPage;