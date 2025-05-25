import { useEffect, useState } from 'react';
import axios from 'axios';

const CarNews = () => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;

  const fetchNews = async (page = null) => {
    try {
      const res = await axios.get('http://localhost:3000/api/auth/news', {
        params: { page },
      });

      setNews((prev) => [...prev, ...(res.data.results || [])]);
      setNextPage(res.data.nextPage || null);
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleLoadMore = () => {
    if (nextPage) {
      setLoadingMore(true);
      fetchNews(nextPage);
    }
  };

  return (
    <div className="!px-4 !py-6 w-full">
      <h2 className="text-3xl font-bold !mb-6 text-center">🚗 Automotive News from past 48 hr</h2>

      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border rounded-xl shadow-md hover:shadow-xl transition overflow-hidden bg-white"
              >
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-140 object-cover !m-5 !p-5 !mt-5"
                  />
                )}
                <h3 className="text-lg font-semibold text-blue-700 hover:underline !p-4">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>

          {nextPage && (
            <div className="text-center !mt-8">
              <button
                onClick={handleLoadMore}
                className="!px-6 !py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                disabled={loadingMore}
              >
                {loadingMore ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CarNews;
