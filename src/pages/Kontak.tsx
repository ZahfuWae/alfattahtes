import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

const KontakPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    // Reset form fields if needed
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Hubungi Kami</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Informasi Kontak</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Jangan ragu untuk menghubungi kami melalui informasi di bawah ini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#fda00f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Alamat</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Jl. Fatahillah Blok Masjid RT/RW 012/005 Kelurahan Perbutulan Kecamatan Sumber Kabupaten Cirebon
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#fda00f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Telepon</h3>
                  <p className="text-gray-700 dark:text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#fda00f] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">info@fathatulhidayah.sch.id</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-3">Lokasi Kami</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9000000000005!2d108.48000000000001!3d-6.8999999999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMDAuMCJTIDEwOMKwMjgnNDguMCJF!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader className="text-center lg:text-left">
              <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">Kirim Pesan kepada Kami</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name" className="text-lg">Nama Lengkap</Label>
                  <Input id="contact-name" type="text" placeholder="Nama Anda" required className="mt-2 p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="text-lg">Email</Label>
                  <Input id="contact-email" type="email" placeholder="email@example.com" required className="mt-2 p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="contact-subject" className="text-lg">Subjek</Label>
                  <Input id="contact-subject" type="text" placeholder="Subjek Pesan Anda" required className="mt-2 p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="contact-message" className="text-lg">Pesan Anda</Label>
                  <Textarea id="contact-message" placeholder="Tulis pesan Anda di sini..." rows={6} required className="mt-2 p-3 text-lg" />
                </div>
                <Button type="submit" className="w-full bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-md py-3 text-lg">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KontakPage;