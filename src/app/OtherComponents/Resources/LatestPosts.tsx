"use client";
import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Ernie Smith",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Eric Smith",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Elizabeth Slavin",
    date: "August 20, 2022",
  },
  {
    img: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    authorImg: "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Ernie Smith",
    date: "August 20, 2022",
  },
];

export default function LatestPosts() {
  const [imgErrors, setImgErrors] = useState<Record<number, { post: boolean; author: boolean }>>({});

  const handleImageError = (postIdx: number, type: 'post' | 'author') => {
    setImgErrors(prev => ({
      ...prev,
      [postIdx]: {
        ...prev[postIdx],
        [type]: true
      }
    }));
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-lg font-semibold mb-6">Latest Post</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4"
            >
              {/* IMAGE */}
              <Image
                src={imgErrors[idx]?.post ? "/assets/default.png" : post.img}
                width={400}
                height={250}
                alt="Post Image"
                className="rounded-lg w-full h-[200px] object-cover"
                onError={() => handleImageError(idx, 'post')}
              />

              {/* TAG */}
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
                Technology
              </span>

              {/* TITLE */}
              <h3 className="font-semibold text-[15px] leading-5 mt-3">
                {post.title}
              </h3>

              {/* AUTHOR ROW */}
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src={imgErrors[idx]?.author ? "/assets/default.png" : post.authorImg}
                  width={28}
                  height={28}
                  alt="Author"
                  className="rounded-full"
                  onError={() => handleImageError(idx, 'author')}
                />
                <p className="text-[12px] text-gray-700">{post.author}</p>
                <span className="text-gray-400 text-[12px]">•</span>
                <p className="text-[12px] text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
