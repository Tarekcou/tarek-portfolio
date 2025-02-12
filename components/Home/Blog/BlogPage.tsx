import { blogs } from '@/Data/data';
import React from 'react';

const blogPosts = [
  {
    title: 'Top Web Development Trends to Watch in 2024',
    description: 'Explore the key web development trends for 2024 and their impact on your business.',
    date: 'August 18, 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '#'
  },
  {
    title: 'Why Your Business Needs a Custom Web Application',
    description: 'Discover why custom web applications are crucial for driving business growth and efficiency.',
    date: 'August 10, 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '#'
  },
  {
    title: 'The Importance of Website Speed Optimization',
    description: 'Understand how website speed impacts user experience and learn essential optimization tips.',
    date: 'July 25, 2024',
    image: 'https://via.placeholder.com/400x250',
    link: '#'
  }
];

export default function     BlogPage() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-20">
      <div className="flex items-center my-5 w-full">
          <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
            Blog
          </h2>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((post, index) => (
          <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

            <div className="p-4">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">News</span>
              <h3 className="text-lg font-bold mt-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{post.summary}</p>

              <hr className="my-2 border-gray-700" />

              <div className="flex justify-between items-center text-sm">
                <span>{post.date}</span>
                <a href={post.title} className="text-blue-400 font-semibold hover:underline">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}