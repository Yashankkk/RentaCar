import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/news');
        console.log("FULL API RESPONSE:", response.data);
        const articlesData = response.data.data?.articles || response.data.articles || [];
        console.log("Extracted Articles:", articlesData);
        
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center !mt-10 text-xl">Loading car news...</p>;
  }
  console.log("Articles state:", articles);

  return (
    <div className="max-w-6xl mx-auto !px-4 !py-8 space-y-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
        >
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full md:w-1/3 h-64 object-cover"
            />
          )}
          <div className="!p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 !mb-2">{article.title}</h2>
              {article.published_at && (
                <p className="text-sm text-gray-500 !mb-2">
                  {new Date(article.published_at).toLocaleDateString()}
                </p>
              )}
              <p className="text-gray-700 text-base !mb-4">
                {article.description?.slice(0, 150)}...
              </p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Read Full Article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarNews;
