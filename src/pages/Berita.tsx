import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';

// Interface untuk struktur data postingan dari WordPress API
interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    author?: Array<{ name: string }>;
  };
}

const BeritaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsItem, setNewsItem] = useState<any | null>(null);
  const [allNewsItems, setAllNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<WordPressPost[]>(
          `https://fathatulhidayah.sch.id/wp-json/wp/v2/posts?_embed&per_page=100` // Mengambil lebih banyak postingan untuk daftar
        );

        const formattedNews = response.data.map((post) => ({
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
          author: post._embedded?.author?.[0]?.name || 'Admin',
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''),
          content: post.content.rendered,
          link: `/informasi/berita/${post.slug}`,
          slug: post.slug,
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/800x450/CCCCCC/FFFFFF?text=No+Image',
        }));
        setAllNewsItems(formattedNews);

        if (slug) {
          const foundItem = formattedNews.find((item) => item.slug === slug);
          setNewsItem(foundItem);
        }
      } catch (err) {
        console.error("Gagal mengambil berita dari WordPress API:", err);
        setError('Gagal memuat berita. Pastikan situs WordPress Anda aktif dan dapat diakses.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">Memuat berita...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 px-4 text-center">
          <p className="text-red-500 dark:text-red-400">{error}</p>
        </main>
        <Footer />
      </div>
    );
  }

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