import React, { useEffect, useState } from 'react';
import { Rate, Spin } from 'antd';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/auth/review');
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="text-center mt-10"><Spin size="large" /></div>;

  return (
    <div>
        <Header />
        <section
        className="h-85 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/4090350/pexels-photo-4090350.jpeg')" }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">Reviews</h1>
      </section>
      <div className="max-w-7xl !mx-auto">
        <h2 className="text-3xl font-bold text-white !mb-8 text-center">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg !p-5 space-y-4"
            >
              {review.imageUrl && (
                <img
                  src={review.imageUrl}
                  alt="Reviewer"
                  className="w-16 h-16 rounded-full object-cover !mx-auto"
                />
              )}
              <p className="text-gray-700 text-center italic">"{review.feedback}"</p>
              <Rate disabled defaultValue={review.rating} className="flex justify-center" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewList;
