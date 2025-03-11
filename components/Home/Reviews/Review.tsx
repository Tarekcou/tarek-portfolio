import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { clientReviews } from "@/Data/data";
import Image from "next/image";

export default function ClientReviews() {
  return (
    <div className="relative bg-black px-4 md:px-20 py-12 text-white">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
          Client Reviews
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mx-auto max-w-6xl"
      >
        {clientReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 shadow-lg mx-2 p-6 rounded-2xl h-[350px] text-center">
              <p className="mb-2 text-blue-400 text-4xl">“</p>
              <p className="mb-4 text-sm">{review.review}</p>
              <p className="mb-2 text-blue-400 text-4xl">”</p>

              <div className="flex justify-center items-center gap-2 bg-blue-700 mx-auto px-4 py-1 rounded-full w-fit">
                <span className="font-bold text-xl">{review.rating}</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </div>

              <div className="flex justify-center items-center gap-4 bg-white mt-4 p-3 rounded-xl">
                <Image
                  width={10}
                  height={10}
                  src={review.image}
                  alt={review.name}
                  className="rounded-full w-10 h-10"
                />
                <div className="text-left">
                  <p className="font-bold text-black text-xl">{review.name}</p>
                  <p className="text-gray-600 text-sm">{review.profession}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
