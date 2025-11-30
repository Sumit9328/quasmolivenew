"use client";
import { useState } from "react";

export default function OpportunityForm() {

  return (
    <div className="w-full min-h-screen bg-[#f4f6ff] flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-2">
          Explore future opportunities
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Not sure or unable to find the jobs upload your details we will connect you once we come up with something for you.
        </p>

        {/* FORM */}
        <div className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="John smith"
              className="w-full h-12 border rounded-md px-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="jsmith@gmail.com"
              className="w-full h-12 border rounded-md px-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="774-987-4009"
              className="w-full h-12 border rounded-md px-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Role</label>
            <input
              type="text"
              placeholder="Enter your desired role"
              className="w-full h-12 border rounded-md px-4 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-[#b8c6ff] rounded-xl py-10 flex justify-center text-sm text-gray-700">
            <span className="font-semibold">
              Upload resume only in .pdf or Word files
            </span>
          </div>

          {/* Checkbox 1 */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 cursor-pointer"
            />
            <label className="text-sm text-gray-700 leading-snug">
              I have read and agree to the{" "}
              <span className="text-blue-600 cursor-pointer">terms</span>
            </label>
          </div>

          {/* Checkbox 2 */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 cursor-pointer"
            />
            <label className="text-sm text-gray-600 leading-snug">
              Save my CV and contact me for jobs that I may be suitable for{" "}
              <span className="text-gray-400">optional</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button className="text-gray-600 text-sm">Cancel</button>

            <button className="bg-[#2d4bff] hover:bg-[#1f39d9] text-white text-sm px-10 py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
