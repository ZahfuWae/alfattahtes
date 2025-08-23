import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import axios from 'axios';

// Interface untuk struktur data halaman dari WordPress GraphQL API
interface GraphQLPageNode {
  id: string;
  title: string;
  content: string;
}

interface GraphQLResponse {
  data: {
    pageBy: GraphQLPageNode;
  };
}

const SejarahPage = () => {
  const [pageContent, setPageContent] = useState<GraphQLPageNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        const GRAPHQL_API_URL = 'https://fathatulhidayah.sch.id/graphql'; // Endpoint GraphQL Anda
        const pageSlug = 'sejarah'; // Ganti dengan slug halaman Sejarah Anda di WordPress

        const query = `
          query GetSejarahPage($slug: String!) {
            pageBy(uri: $slug) { # Menggunakan 'uri' untuk mencari berdasarkan slug/path
              id
              title
              content
            }
          }
        `;

        const response = await axios.post<GraphQLResponse>(GRAPHQL_API_URL, {
          query,
          variables: { slug: pageSlug },
        });

        const pageData = response.data.data.pageBy;

        if (pageData) {
          setPageContent(pageData);
        } else {
          setError('Halaman Sejarah tidak ditemukan di WordPress.');
        }
      } catch (err) {
        console.error("Gagal mengambil konten halaman Sejarah dari WordPress GraphQL API:", err);
        setError('Gagal memuat konten. Pastikan plugin WPGraphQL aktif dan halaman dengan slug "sejarah" ada di WordPress Anda.');
      } finally {
        setLoading(false);
      }
    };

    fetchPageContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">Memuat konten halaman...</p>
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

  if (!pageContent) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-16 px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">Konten halaman tidak tersedia.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">{pageContent.title}</h1>
        <div
          className="prose dark:prose-invert mx-auto"
          dangerouslySetInnerHTML={{ __html: pageContent.content }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SejarahPage;