import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const allPrograms = [
  {
    title: 'TK IT Fathatul Hidayah',
    description: 'Program pendidikan anak usia dini yang berfokus pada pengembangan karakter Islami dan kreativitas.',
    image: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/TK-IT.jpg',
    link: '/lembaga/tk-it',
    icon: <BookOpen className="h-8 w-8 text-white" />,
    bgColor: 'bg-red-500',
  },
  {
    title: 'SD IT Fathatul Hidayah',
    description: 'Pendidikan dasar yang mengintegrasikan kurikulum nasional dengan nilai-nilai agama dan teknologi.',
    image: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/SD-IT.jpg',
    link: '/lembaga/sd-it',
    icon: <Users className="h-8 w-8 text-white" />,
    bgColor: 'bg-green-500',
  },
  {
    title: 'SMP IT Fathatul Hidayah',
    description: 'Pendidikan menengah pertama yang mempersiapkan siswa dengan ilmu pengetahuan dan akhlak mulia.',
    image: 'http://fathatulhidayah.sch.id/wp-content/uploads/2025/08/Qiroah2.png', // Using Qiroah2 as a placeholder for SMP IT
    link: '/lembaga/smp-it',
    icon: <GraduationCap className="h-8 w-8 text-white" />,
    bgColor: 'bg-blue-500',
  },
];

const LembagaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Lembaga Pendidikan Kami</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPrograms.map((program, index) => (
            <Card key={index} className="overflow-hidden rounded-2xl shadow-lg border-none">
              <div className="relative h-48">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className={cn("absolute top-4 left-4 p-3 rounded-full", program.bgColor)}>
                  {program.icon}
                </div>
              </div>
              <CardContent className="p-6 bg-white dark:bg-gray-800">
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.description}
                </CardDescription>
                <Link to={program.link} className="text-[#fda00f] hover:underline font-semibold">
                  Pelajari Lebih Lanjut &rarr;
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

export default LembagaPage;