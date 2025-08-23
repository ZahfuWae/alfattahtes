import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const SaranPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success('Terima kasih atas saran Anda! Kami akan meninjaunya.');
    // Reset form fields if needed
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">Kirim Saran Anda</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Kami sangat menghargai masukan Anda untuk kemajuan Pondok Pesantren Al-Fattah.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg">Nama (Opsional)</Label>
                <Input id="name" type="text" placeholder="Nama Anda" className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg">Email (Opsional)</Label>
                <Input id="email" type="email" placeholder="email@example.com" className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-lg">Subjek</Label>
                <Input id="subject" type="text" placeholder="Subjek Saran Anda" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg">Saran Anda</Label>
                <Textarea id="message" placeholder="Tulis saran Anda di sini..." rows={6} required className="mt-2 p-3 text-lg" />
              </div>
              <Button type="submit" className="w-full bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-md py-3 text-lg">
                Kirim Saran
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default SaranPage;