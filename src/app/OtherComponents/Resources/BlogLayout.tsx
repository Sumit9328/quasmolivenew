"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogLayout() {
  const [bigImgError, setBigImgError] = useState(false);
  const [sideImg1Error, setSideImg1Error] = useState(false);
  const [sideImg2Error, setSideImg2Error] = useState(false);
  const [sideImg3Error, setSideImg3Error] = useState(false);
  const [sideImg4Error, setSideImg4Error] = useState(false);
  const [sidebarImg1Error, setSidebarImg1Error] = useState(false);
  const [sidebarImg2Error, setSidebarImg2Error] = useState(false);
  const [sidebarImg3Error, setSidebarImg3Error] = useState(false);

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">

        {/* LEFT SIDE MAIN SECTION */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-[65%_35%] gap-5">

          {/* BIG IMAGE + TEXT */}
          <div className="border rounded-lg p-5">
            <Image
              src={bigImgError ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
              width={900}
              height={600}
              alt="Post Image"
              className="rounded-md w-full h-[300px] object-cover"
              onError={() => setBigImgError(true)}
            />

            <p className="text-xs mt-3 text-gray-500">1 Month Ago</p>

            <h2 className="text-[18px] font-semibold mt-1">
              Tick one more destination off of your bucket list with one of our most popular vacations in 2022
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              It. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex.
              Donec quis magna sed felis elementum blandit nec quis sem. Maecen.
            </p>

            <button className="mt-4 text-sm text-blue-500">View Post</button>
          </div>

{/* SMALL IMAGES COLUMN (4 IMAGES + CONTENT) */}
<div className="flex flex-col gap-5">

  {/* ITEM 1 */}
  <div className="flex items-start gap-3 border rounded-lg p-3">
    <Image
      src={sideImg1Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
      width={120}
      height={90}
      className="w-[110px] h-[80px] object-cover rounded"
      alt="side"
      onError={() => setSideImg1Error(true)}
    />
    <div className="flex-1">
      <h4 className="text-sm font-semibold leading-tight">
        Stunning places you must visit this year
      </h4>
      <p className="text-[11px] text-gray-500 mt-1">2 Days Ago</p>
    </div>
  </div>

  {/* ITEM 2 */}
  <div className="flex items-start gap-3 border rounded-lg p-3">
    <Image
      src={sideImg2Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
      width={120}
      height={90}
      className="w-[110px] h-[80px] object-cover rounded"
      alt="side"
      onError={() => setSideImg2Error(true)}
    />
    <div className="flex-1">
      <h4 className="text-sm font-semibold leading-tight">
        Top attractions added recently to Europe tours
      </h4>
      <p className="text-[11px] text-gray-500 mt-1">1 Week Ago</p>
    </div>
  </div>

  {/* ITEM 3 */}
  <div className="flex items-start gap-3 border rounded-lg p-3">
    <Image
      src={sideImg3Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
      width={120}
      height={90}
      className="w-[110px] h-[80px] object-cover rounded"
      alt="side"
      onError={() => setSideImg3Error(true)}
    />
    <div className="flex-1">
      <h4 className="text-sm font-semibold leading-tight">
        Best journeys for solo travelers in 2024
      </h4>
      <p className="text-[11px] text-gray-500 mt-1">3 Weeks Ago</p>
    </div>
  </div>

  {/* ITEM 4 */}
  <div className="flex items-start gap-3 border rounded-lg p-3">
    <Image
      src={sideImg4Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
      width={120}
      height={90}
      className="w-[110px] h-[80px] object-cover rounded"
      alt="side"
      onError={() => setSideImg4Error(true)}
    />
    <div className="flex-1">
      <h4 className="text-sm font-semibold leading-tight">
        Popular mountain destinations to explore
      </h4>
      <p className="text-[11px] text-gray-500 mt-1">1 Month Ago</p>
    </div>
  </div>

</div>


        </div>

        {/* RIGHT SIDE LIST CARD */}
        <div className="border rounded-lg p-5">
          <h3 className="font-semibold text-[16px] mb-5">Manga reads</h3>

          <div className="space-y-6">

            <div className="flex items-start gap-3">
              <Image
                src={sidebarImg1Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
                width={100}
                height={80}
                alt="small image"
                className="w-[90px] h-[70px] object-cover rounded"
                onError={() => setSidebarImg1Error(true)}
              />
              <div>
                <h4 className="text-[13px] font-medium leading-[1.3]">
                  Tick one more destination off of your bucket list with one of our most popular vacations in 2022
                </h4>
                <p className="text-xs text-gray-500 mt-1">21 March 2021</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Image
                src={sidebarImg2Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
                width={100}
                height={80}
                alt="small image"
                className="w-[90px] h-[70px] object-cover rounded"
                onError={() => setSidebarImg2Error(true)}
              />
              <div>
                <h4 className="text-[13px] font-medium leading-[1.3]">
                  Tick one more destination off of your bucket list with one of our most popular vacations in 2022
                </h4>
                <p className="text-xs text-gray-500 mt-1">21 March 2021</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Image
                src={sidebarImg3Error ? "/assets/default.png" : "/resources/74654a8f67369b797c8fb2e96a533fd515fb2939.jpg"}
                width={100}
                height={80}
                alt="small image"
                className="w-[90px] h-[70px] object-cover rounded"
                onError={() => setSidebarImg3Error(true)}
              />
              <div>
                <h4 className="text-[13px] font-medium leading-[1.3]">
                  Tick one more destination off of your bucket list with one of our most popular vacations in 2022
                </h4>
                <p className="text-xs text-gray-500 mt-1">21 March 2021</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
