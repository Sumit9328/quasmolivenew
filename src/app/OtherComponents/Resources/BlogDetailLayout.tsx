"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogDetailLayout() {
  const [authorImg1Error, setAuthorImg1Error] = useState(false);
  const [postImg1Error, setPostImg1Error] = useState(false);
  const [authorImg2Error, setAuthorImg2Error] = useState(false);
  const [postImg2Error, setPostImg2Error] = useState(false);
  const [authorImg3Error, setAuthorImg3Error] = useState(false);

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">
        {/* LEFT MAIN CONTENT */}
        <div>
          {/* TAG */}
          <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md inline-block">
            Technology
          </span>
          {/* TITLE */}
          <h1 className="text-3xl font-bold mt-4 leading-snug">
            The Impact of Technology on the Workplace: <br />
            How Technology is Changing
          </h1>
          {/* AUTHOR + DATE */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src={authorImg1Error ? "/assets/default.png" : "/authors/a1.jpg"}
              width={32}
              height={32}
              alt="Author"
              className="rounded-full"
              onError={() => setAuthorImg1Error(true)}
            />
            <p className="text-sm font-medium text-gray-700">Tracey Wilson</p>
            <span className="text-gray-400 text-sm">•</span>
            <p className="text-sm text-gray-500">August 20, 2022</p>
          </div>
          {/* TEXT CONTENT */}
          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed text-[15px]">
            <p>
              Traveling is an enriching experience that opens up new horizons, exposes us to different cultures,
              and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming,
              especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and
              tricks for a memorable journey and how to make the most of your travels.
            </p>
            <p>
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs.
              This includes trying local cuisine, attending cultural events and festivals, and interacting with locals.
              Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>
            {/* HEADING */}
            <h2 className="text-xl font-semibold">Research Your Destination</h2>
            <p>
              Before embarking on your journey, take the time to research your destination. This includes understanding
              the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations.
              Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet
              nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
              at in tellus.
            </p>
            {/* HEADING */}
            <h2 className="text-xl font-semibold">Plan Your Itinerary</h2>
            <p>
              While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can
              help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize
              them according to your interests and preferences. This will help you avoid overscheduling and ensure that
              you have time to relax and enjoy your journey.
            </p>
          </div>
        </div>
        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">
          <button className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md">
            Recent Blogs
          </button>
          {/* SIDEBAR BLOG CARD 1 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <img
              src={postImg1Error ? "/assets/default.png" : "/posts/p1.jpg"}
              width={400}
              height={250}
              alt="Sidebar Post"
              className="rounded-lg w-full h-[150px] object-cover"
              onError={() => setPostImg1Error(true)}
            />
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
              Technology
            </span>
            <h3 className="mt-2 text-[15px] font-semibold leading-tight">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={authorImg2Error ? "/assets/default.png" : "/authors/a2.jpg"}
                width={26}
                height={26}
                alt="Author"
                className="rounded-full"
                onError={() => setAuthorImg2Error(true)}
              />
              <p className="text-xs font-medium text-gray-700">Tracey Wilson</p>
              <span className="text-gray-400 text-xs">•</span>
              <p className="text-xs text-gray-500">August 20, 2022</p>
            </div>
          </div>
          {/* SIDEBAR BLOG CARD 2 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <img
              src={postImg2Error ? "/assets/default.png" : "/posts/p2.jpg"}
              width={400}
              height={250}
              alt="Sidebar Post"
              className="rounded-lg w-full h-[150px] object-cover"
              onError={() => setPostImg2Error(true)}
            />
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
              Technology
            </span>
            <h3 className="mt-2 text-[15px] font-semibold leading-tight">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={authorImg3Error ? "/assets/default.png" : "/authors/a3.jpg"}
                width={26}
                height={26}
                alt="Author"
                className="rounded-full"
                onError={() => setAuthorImg3Error(true)}
              />
              <p className="text-xs font-medium text-gray-700">
                Elizabeth Slavin
              </p>
              <span className="text-gray-400 text-xs">•</span>
              <p className="text-xs text-gray-500">August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

