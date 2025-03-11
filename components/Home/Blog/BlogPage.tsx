import { blogs } from "@/Data/data";
import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <div className="bg-black px-4 md:px-20 py-12 text-white">
      <div className="flex items-center my-5 w-full">
        <h2 className="inline-block bg-blue-800 mx-auto mb-4 p-3 font-bold text- text-white text-3xl md:text-4xl -rotate-3 transform">
          Blog
        </h2>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {blogs.map((post, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl overflow-hidden"
          >
            <Image
              width={30}
              height={30}
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <span className="bg-red-500 px-2 py-1 rounded font-bold text-white text-xs">
                News
              </span>
              <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-gray-400 text-sm">{post.summary}</p>

              <hr className="my-2 border-gray-700" />

              <div className="flex justify-between items-center text-sm">
                <span>{post.date}</span>
                <a
                  href={post.title}
                  className="font-semibold text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
