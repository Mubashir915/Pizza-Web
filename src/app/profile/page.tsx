"use client";
import React from "react";
import Link from 'next/link';
import page from "@/app/login/page";
export default function OrderSection() {
  return (
    <section>
      <div className="items-center text-center bg-black mx-auto px-4 lg:px-8 py-8">
        <h1 className="border-white text-white font-serif lg:text-5xl md:text-5xl text-4xl">
          Signup
        </h1>
        <form className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2 border-gray-500">
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
            {/* For customer name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-bold text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
              />
            </div>

            {/* For phone number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
              />
            </div>

            {/* For Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                required
              />
            </div>

            {/* For Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
                required
              />
            </div>

            {/* For Age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-white"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
              />
            </div>

            {/* For Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-white"
              >
                Gender
              </label>
              <select
                id="gender"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* For Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black"
              />
            </div>

            {/* Address Field */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-white"
              >
                Address
              </label>
              <textarea
                id="address"
                placeholder="Please provide your address..."
                className="box text-slate-500 mt-1 p-2 sm:p-3 h-32 sm:h-48 rounded border-l-2 border-b-2 border-gray-500 bg-transparent w-full resize-none focus:bg-slate-200 focus:text-black"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-orange-500 transition-colors hover:bg-gray-800 hover:text-white"
            >
              Create an Account
            </button>
          </div>
        </form>
        <section>
    <div>
    <div>
      <Link href="/login">
        <button 
          type="submit" 
          className="flex items-center justify-center my-4 w-2/5 p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-orange-500 transition-colors hover:bg-gray-800 hover:text-white mx-auto"
        >
          Already have an account?
        </button>
      </Link>
    </div>
    </div>
  </section>
      </div>
    </section>
  );  
}





