"use client";

import Image from "next/image";
import { useState } from "react";

export default function BlogDetailSection2() {
  const [largeImgError, setLargeImgError] = useState(false);
  const [postImg4Error, setPostImg4Error] = useState(false);
  const [authorImg5Error, setAuthorImg5Error] = useState(false);
  const [postImg5Error, setPostImg5Error] = useState(false);
  const [authorImg6Error, setAuthorImg6Error] = useState(false);
  const [postImg6Error, setPostImg6Error] = useState(false);
  const [authorImg7Error, setAuthorImg7Error] = useState(false);

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[65%_35%] gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-10 text-[15px] leading-relaxed text-gray-700">
          <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-600">
            "Traveling can expose you to new environments and potential health risks, 
            so it's crucial to take precautions to stay safe and healthy."
          </blockquote>

          {/* LARGE IMAGE */}
          <img
            src={largeImgError ? "/assets/default.png" : "/posts/large-img.jpg"}
            width={900}
            height={600}
            alt="Blog Image"
            className="rounded-xl w-full h-[350px] object-cover"
            onError={() => setLargeImgError(true)}
          />

          {/* ADVERTISEMENT */}
          <div className="text-center text-gray-500 text-xs mt-2">
            <span>Advertisement</span>
            <div>You can place ads</div>
            <div className="text-gray-400">728x90</div>
          </div>

          {/* SECTION 1 */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Pack Lightly and Smartly</h2>
            <p>
              Packing can be a daunting task, but with some careful planning and smart choices, 
              you can pack light and efficiently. Start by making a packing list and sticking to it...
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Stay Safe and Healthy</h2>
            <p>
              Traveling can expose you to new environments and potential health risks...
            </p>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Immerse Yourself in the Local Culture</h2>
            <p>
              One of the most rewarding aspects of traveling is immersing yourself in the local culture...
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Capture Memories</h2>
            <p>
              Finally, don't forget to capture memories of your journey...
            </p>
          </div>

          {/* CONCLUSION */}
          <div>
            <h2 className="text-[20px] font-semibold mb-2">Conclusion</h2>
            <p>
              Traveling is an art form that requires a blend of planning, preparation, and spontaneity...
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8">

          {/* Sidebar Post 1 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <img
              src={postImg4Error ? "/assets/default.png" : "/posts/p4.jpg"}
              width={400}
              height={250}
              alt="Sidebar Post"
              className="rounded-lg w-full h-[140px] object-cover"
              onError={() => setPostImg4Error(true)}
            />
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
              Technology
            </span>
            <h3 className="mt-2 text-[14px] font-semibold leading-snug">
              The Impact of Technology on the Workplace
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <img
                src={authorImg5Error ? "/assets/default.png" : "/authors/a5.jpg"}
                width={26}
                height={26}
                alt="Author"
                className="rounded-full"
                onError={() => setAuthorImg5Error(true)}
              />
              <p className="text-xs font-medium text-gray-700">Ernie Smith</p>
              <span className="text-gray-400 text-xs">•</span>
              <p className="text-xs text-gray-500">August 20, 2022</p>
            </div>
          </div>

          {/* Sidebar Post 2 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <img
              src={postImg5Error ? "/assets/default.png" : "/posts/p5.jpg"}
              width={400}
              height={250}
              alt="Sidebar Post"
              className="rounded-lg w-full h-[140px] object-cover"
              onError={() => setPostImg5Error(true)}
            />
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
              Technology
            </span>
            <h3 className="mt-2 text-[14px] font-semibold leading-snug">
              The Impact of Technology on the Workplace
            </h3>

            <div className="flex items-center gap-2 mt-3">
              <Image
                src={authorImg6Error ? "/assets/default.png" : "/authors/a6.jpg"}
                width={26}
                height={26}
                alt="Author"
                className="rounded-full"
                onError={() => setAuthorImg6Error(true)}
                unoptimized
              />
              <p className="text-xs font-medium text-gray-700">Ernie Smith</p>
              <span className="text-gray-400 text-xs">•</span>
              <p className="text-xs text-gray-500">August 20, 2022</p>
            </div>
          </div>

          {/* Sidebar Post 3 */}
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <Image
              src={postImg6Error ? "/assets/default.png" : "/posts/p6.jpg"}
              width={400}
              height={250}
              alt="Sidebar Post"
              className="rounded-lg w-full h-[140px] object-cover"
              onError={() => setPostImg6Error(true)}
              unoptimized
            />
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
              Technology
            </span>
            <h3 className="mt-2 text-[14px] font-semibold leading-snug">
              The Impact of Technology on the Workplace
            </h3>

            <div className="flex items-center gap-2 mt-3">
              <Image
                src={authorImg7Error ? "/assets/default.png" : "/authors/a7.jpg"}
                width={26}
                height={26}
                alt="Author"
                className="rounded-full"
                onError={() => setAuthorImg7Error(true)}
                unoptimized
              />
              <p className="text-xs font-medium text-gray-700">Ernie Smith</p>
              <span className="text-gray-400 text-xs">•</span>
              <p className="text-xs text-gray-500">August 20, 2022</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
