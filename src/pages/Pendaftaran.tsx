import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const PendaftaranPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success('Pendaftaran Anda berhasil! Kami akan segera menghubungi Anda untuk langkah selanjutnya.');
    // Reset form fields if needed
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">Formulir Pendaftaran Santri Baru</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Isi formulir di bawah ini untuk mendaftarkan putra/putri Anda di Pondok Pesantren Al-Fattah.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nama-lengkap" className="text-lg">Nama Lengkap Calon Santri</Label>
                <Input id="nama-lengkap" type="text" placeholder="Nama Lengkap" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="tanggal-lahir" className="text-lg">Tanggal Lahir</Label>
                <Input id="tanggal-lahir" type="date" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="jenis-kelamin" className="text-lg">Jenis Kelamin</Label>
                <Select required>
                  <SelectTrigger className="w-full mt-2 p-3 text-lg">
                    <SelectValue placeholder="Pilih Jenis Kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="jenjang-pendidikan" className="text-lg">Jenjang Pendidikan yang Dituju</Label>
                <Select required>
                  <SelectTrigger className="w-full mt-2 p-3 text-lg">
                    <SelectValue placeholder="Pilih Jenjang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tk-it">TK IT Fathatul Hidayah</SelectItem>
                    <SelectItem value="sd-it">SD IT Fathatul Hidayah</SelectItem>
                    <SelectItem value="smp-it">SMP IT Fathatul Hidayah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="nama-wali" className="text-lg">Nama Lengkap Orang Tua/Wali</Label>
                <Input id="nama-wali" type="text" placeholder="Nama Orang Tua/Wali" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="email-wali" className="text-lg">Email Orang Tua/Wali</Label>
                <Input id="email-wali" type="email" placeholder="email@example.com" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="telepon-wali" className="text-lg">Nomor Telepon Orang Tua/Wali</Label>
                <Input id="telepon-wali" type="tel" placeholder="+62 8XX XXXX XXXX" required className="mt-2 p-3 text-lg" />
              </div>
              <div>
                <Label htmlFor="alamat" className="text-lg">Alamat Lengkap</Label>
                <Textarea id="alamat" placeholder="Alamat Lengkap Anda" rows={4} required className="mt-2 p-3 text-lg" />
              </div>
              <Button type="submit" className="w-full bg-[#fda00f] hover:bg-[#e08c00] text-white rounded-md py-3 text-lg">
                Kirim Pendaftaran
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PendaftaranPage;