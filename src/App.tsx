import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import placeholder pages for navigation
import SejarahPage from "./pages/Sejarah";
import SambutanPimpinanPage from "./pages/SambutanPimpinan";
import TkItPage from "./pages/TkIt";
import SdItPage from "./pages/SdIt";
import SmpItPage from "./pages/SmpIt";
import BeritaPage from "./pages/Berita";
import PengumumanPage from "./pages/Pengumuman";
import KalenderAkademikPage from "./pages/KalenderAkademik";
import SaranPage from "./pages/Saran";
import KontakPage from "./pages/Kontak";
import PendaftaranPage from "./pages/Pendaftaran";
import LembagaPage from "./pages/Lembaga";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/profil/sejarah" element={<SejarahPage />} />
          <Route path="/profil/sambutan-pimpinan" element={<SambutanPimpinanPage />} />
          <Route path="/lembaga/tk-it" element={<TkItPage />} />
          <Route path="/lembaga/sd-it" element={<SdItPage />} />
          <Route path="/lembaga/smp-it" element={<SmpItPage />} />
          <Route path="/informasi/berita" element={<BeritaPage />} />
          <Route path="/informasi/pengumuman" element={<PengumumanPage />} />
          <Route path="/informasi/kalender-akademik" element={<KalenderAkademikPage />} />
          <Route path="/saran" element={<SaranPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="/pendaftaran" element={<PendaftaranPage />} />
          <Route path="/lembaga" element={<LembagaPage />} />
          {/* Specific news article route (example) */}
          <Route path="/informasi/berita/:slug" element={<BeritaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;