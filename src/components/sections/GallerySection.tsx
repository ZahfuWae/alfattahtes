import React from 'react';
import { Card } from '@/components/ui/card';

const galleryImages = [
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/SD-IT.jpg',
    alt: 'Kegiatan SD IT',
  },
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT.jpg',
    alt: 'Kegiatan TK IT',
  },
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/Qiroah2.png',
    alt: 'Kegiatan Qiroah',
  },
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT2.jpg',
    alt: 'Kegiatan TK IT 2',
  },
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT3.jpg',
    alt: 'Kegiatan TK IT 3',
  },
  {
    src: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT4.jpg',
    alt: 'Kegiatan TK IT 4',
  },
];

const GallerySection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h6 className="text-[#fda00f] uppercase font-semibold mb-2">Galeri Kami</h6>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white leading-tight">
          Momen-momen Indah di Pondok Pesantren Al-Fattah
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;