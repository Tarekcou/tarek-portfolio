import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { clientReviews } from '@/Data/data';



export default function ClientReviews() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-20 relative">
        <div className="flex items-center my-5 w-full">
          <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
            Client Reviews
          </h2>
        </div>

      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {clientReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 p-6 rounded-2xl text-center shadow-lg mx-2 h-[350px]">
              <p className="text-4xl text-blue-400 mb-2">“</p>
              <p className="text-sm mb-4 ">{review.review}</p>
              <p className="text-4xl text-blue-400 mb-2">”</p>

              <div className="flex justify-center items-center gap-2 bg-blue-700 px-4 py-1 rounded-full w-fit mx-auto">
                <span className="font-bold text-xl ">{review.rating}</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>

              <div className="flex items-center gap-4 mt-4 bg-white p-3 rounded-xl justify-center">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
                <div className="text-left">
                  <p className="font-bold text-black text-xl">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        
      </Swiper>
    </div>
  );
}
