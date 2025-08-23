import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';

// Interface untuk struktur data postingan dari WordPress GraphQL API
interface GraphQLPostNode {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    node: {
      name: string;
    };
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null; // Bisa null jika tidak ada gambar unggulan
}

interface GraphQLResponse {
  data: {
    posts: {
      nodes: GraphQLPostNode[];
    };
  };
}

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const GRAPHQL_API_URL = 'https://fathatulhidayah.sch.id/graphql'; // Endpoint GraphQL Anda

        const query = `
          query GetPosts {
            posts(first: 3, where: { status: PUBLISH }) { # Mengambil 3 postingan yang dipublikasikan
              nodes {
                id
                slug
                title
                excerpt
                date
                author {
                  node {
                    name
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `;

        const response = await axios.post<GraphQLResponse>(GRAPHQL_API_URL, { query });

        const posts = response.data.data.posts.nodes;

        const formattedNews = posts.map((post) => ({
          title: post.title,
          date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
          author: post.author?.node?.name || 'Admin',
          excerpt: post.excerpt.replace(/<[^>]*>?/gm, ''), // Hapus tag HTML dari excerpt
          link: `/informasi/berita/${post.slug}`,
          image: post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/400x250/CCCCCC/FFFFFF?text=No+Image',
        }));
        setNewsItems(formattedNews);
      } catch (err) {
        console.error("Gagal mengambil berita dari WordPress GraphQL API:", err);
        setError('Gagal memuat berita. Pastikan plugin WPGraphQL aktif dan situs WordPress Anda dapat diakses.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto py-16 px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">Memuat berita terbaru...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto py-16 px-4 text-center">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </section>
    );
  }

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h6 className="text-[#fda00f] uppercase font-semibold mb-2">Blog Kami</h6>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white leading-tight">
          Berita & Artikel Terbaru
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                <Link to={item.link} className="hover:text-[#fda00f]">{item.title}</Link>
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>Oleh {item.author}</span>
                <span className="mx-2">|</span>
                <span>{item.date}</span>
              </div>
              <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                {item.excerpt}
              </CardDescription>
              <Link to={item.link} className="text-[#fda00f] hover:underline font-semibold">
                Baca Selengkapnya &rarr;
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;