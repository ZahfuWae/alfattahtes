import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import axios from 'axios';

// Interface untuk struktur data postingan dari WordPress GraphQL API
interface GraphQLPostNode {
  id: string;
  slug: string;
  title: string;
  content: string;
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
  } | null;
}

interface GraphQLResponseSinglePost {
  data: {
    postBy: GraphQLPostNode;
  };
}

interface GraphQLResponseAllPosts {
  data: {
    posts: {
      nodes: GraphQLPostNode[];
    };
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
        const GRAPHQL_API_URL = 'https://fathatulhidayah.sch.id/graphql';

        // Query untuk mengambil semua postingan (untuk daftar)
        const allPostsQuery = `
          query AllPosts {
            posts(first: 100, where: { status: PUBLISH }) {
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
        const allPostsResponse = await axios.post<GraphQLResponseAllPosts>(GRAPHQL_API_URL, { query: allPostsQuery });
        const allPosts = allPostsResponse.data.data.posts.nodes;

        const formattedAllNews = allPosts.map((post) => ({
          title: post.title,
          date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
          author: post.author?.node?.name || 'Admin',
          excerpt: post.excerpt.replace(/<[^>]*>?/gm, ''),
          content: post.content, // Konten penuh tidak selalu ada di query daftar, akan diambil terpisah jika slug ada
          link: `/informasi/berita/${post.slug}`,
          slug: post.slug,
          image: post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/800x450/CCCCCC/FFFFFF?text=No+Image',
        }));
        setAllNewsItems(formattedAllNews);

        if (slug) {
          // Query untuk mengambil satu postingan berdasarkan slug
          const singlePostQuery = `
            query SinglePost($slug: String!) {
              postBy(slug: $slug) {
                id
                slug
                title
                content
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
          `;
          const singlePostResponse = await axios.post<GraphQLResponseSinglePost>(GRAPHQL_API_URL, {
            query: singlePostQuery,
            variables: { slug },
          });

          const post = singlePostResponse.data.data.postBy;
          if (post) {
            setNewsItem({
              title: post.title,
              date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
              author: post.author?.node?.name || 'Admin',
              content: post.content,
              image: post.featuredImage?.node?.sourceUrl || 'https://via.placeholder.com/800x450/CCCCCC/FFFFFF?text=No+Image',
            });
          } else {
            setError('Berita tidak ditemukan.');
          }
        }
      } catch (err) {
        console.error("Gagal mengambil berita dari WordPress GraphQL API:", err);
        setError('Gagal memuat berita. Pastikan plugin WPGraphQL aktif dan situs WordPress Anda dapat diakses.');
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